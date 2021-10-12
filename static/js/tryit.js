$(document).ready(function() {
    var tryit_terms_hash = "";
    var tryit_console = "";
    var tryit_server = "lxd-demo.linuxcontainers.org";
    var original_url = window.location.href.split("?")[0];
    var term = null
    var sock = null
    var feedback = false

    function getUrlParameter(sParam) {
        var sPageURL = decodeURIComponent(window.location.search.substring(1)),
            sURLVariables = sPageURL.split('&'),
            sParameterName,
            i;

        for (i = 0; i < sURLVariables.length; i++) {
            sParameterName = sURLVariables[i].split('=');

            if (sParameterName[0] === sParam) {
                if (sParameterName[1] === undefined) {
                    return ""
                }

                if (sParameterName[1].substr(-1) === "/") {
                    sParameterName[1] = sParameterName[1].substr(0, sParameterName[1].length - 1);
                }

                return sParameterName[1];
            }
        }

        return ""
    };

    function getTimeRemaining(endtime){
        var current = Math.floor(new Date() / 1000);
        var remaining = endtime - current;

        if (remaining < 0) {
            remaining = 0;
        }

        return remaining
    }

    function initializeClock(id, endtime) {
        var clock = document.getElementById(id);
        var minutesSpan = clock.querySelector('.minutes');
        var secondsSpan = clock.querySelector('.seconds');

        function updateClock() {
            var t = getTimeRemaining(endtime);

            var minutes = Math.floor(t / 60);
            var seconds = t - minutes * 60;

            minutesSpan.innerHTML = ('0' + minutes).slice(-2);
            secondsSpan.innerHTML = ('0' + seconds).slice(-2);

            if(t <= 0) {
                clearInterval(timeinterval);
                window.location.href = original_url;
            }
        }

        updateClock();
        var timeinterval = setInterval(updateClock, 1000);
    }

    function setupConsole(id) {
        var element = document.getElementById('tryit_console');
        var cell = createCell(element);
        var size = getSize(element, cell);

        var height = Math.max(Math.round(window.innerHeight / 70), 15);
        var width = size.cols - 1;

        sock = new WebSocket("wss://"+tryit_server+"/1.0/console?id="+id+"&width="+width+"&height="+height);
        sock.onopen = function (e) {
            term = new Terminal({
                cols: width,
                rows: height,
                useStyle: true,
                screenKeys: false
            });

            $('#tryit_console_reconnect').css("display", "none");
            term.open(document.getElementById("tryit_console"))

            term.on('data', function(data) {
                sock.send(data);
            });

            sock.onmessage = function(msg) {
                term.write(msg.data);
            };

            sock.onclose = function(msg) {
                term.destroy();
                $('#tryit_console_reconnect').css("display", "inherit");
            };
        };
    }

    function getSize(element, cell) {
        var wSubs   = element.offsetWidth - element.clientWidth,
            w       = element.clientWidth - wSubs,

            hSubs   = element.offsetHeight - element.clientHeight,
            h       = element.clientHeight - hSubs,

            x       = cell.clientWidth / 22,
            y       = cell.clientHeight,

            cols    = Math.max(Math.floor(w / x), 10),
            rows    = Math.max(Math.floor(h / y), 10),

            size    = {
                cols: cols,
                rows: rows
            };

        return size;
    }

    function createCell(element) {
        var cell            = document.createElement('div');

        cell.innerHTML = 'root@tryit-session:~#';
        cell.id = "tryit_console_measurement";

        element.appendChild(cell);

        return cell;
    }

    $('.tryit_goback').click(function() {
        window.location.href = original_url;
    });

    function setupPre() {
        var pre = document.getElementsByTagName('pre');
        for (var i = 0; i < pre.length; i++) {
            var lines = pre[i].innerHTML.split('\n')
            pre[i].innerHTML = ""
            for (var j = 0; j < lines.length; j++) {
                if (j > 0) {
                    pre[i].innerHTML += '\n'
                }
                pre[i].innerHTML += '<span class="tryit_run">' + lines[j] + '</span>';
            }
        }
    }
    setupPre()

    $('.tryit_run').click(function() {
        if (!term || !sock) {
            return;
        }

        data = $(this).text()
        sock.send(data);
        sock.send("\n");
    });

    tryit_console = getUrlParameter("id");

    if (tryit_console == "") {
        $.ajax({
            url: "https://"+tryit_server+"/1.0",
            success: function(data) {
                if (data.server_console_only == true) {
                    $('#tryit_ssh_row').css("display", "none");
                    $('#tryit_lxd_row').css("display", "none");
                }

                if (data.server_status == 1) {
                    $('#tryit_maintenance_message').css("display", "inherit");
                    $('#tryit_status_panel').css("display", "inherit");
                    $('#tryit_status_panel').addClass('panel-warning');
                    $('#tryit_status_panel').removeClass('panel-success');
                    return
                }

                $('#tryit_protocol').text(data.client_protocol);
                $('#tryit_address').text(data.client_address);
                $('#tryit_count').text(data.containers_count);
                $('#tryit_max').text(data.containers_max);
                $('#tryit_online_message').css("display", "inherit");
                $('#tryit_status_panel').css("display", "inherit");

                $.ajax({
                    url: "https://"+tryit_server+"/1.0/terms"
                }).then(function(data) {
                    tryit = data;
                    $('#tryit_terms').html(data.terms);
                    tryit_terms_hash = data.hash;
                    $('#tryit_terms_panel').css("display", "inherit");
                    $('#tryit_start_panel').css("display", "inherit");
                });

            },
            error: function(data) {
                $('#tryit_unreachable_message').css("display", "inherit");
                $('#tryit_status_panel').css("display", "inherit");
                $('#tryit_status_panel').addClass('panel-danger');
                $('#tryit_status_panel').removeClass('panel-success');
                return
            }
        });
    } else {
        $.ajax({
            url: "https://"+tryit_server+"/1.0/info?id="+tryit_console,
            success: function(data) {
                if (data.status && data.status != 0) {
                    $('#tryit_start_panel').css("display", "none");
                    $('#tryit_error_missing').css("display", "inherit");
                    $('#tryit_error_panel_access').css("display", "inherit");
                    $('#tryit_error_panel').css("display", "inherit");
                    return
                }

                $('.tryit_container_id').text(data.id);
                $('.tryit_container_ip').text(data.ip);
                $('.tryit_container_fqdn').text(data.fqdn);
                $('.tryit_container_username').text(data.username);
                $('.tryit_container_password').text(data.password);

                initializeClock('tryit_console_panel', data.expiry);

                $('#tryit_status_panel').css("display", "none");
                $('#tryit_start_panel').css("display", "none");
                $('#tryit_console_row').css("display", "inherit");
                $('#tryit_examples_panel').css("display", "inherit");
                $('footer.p-footer').css("display", "none");

                tryit_console = data.id;
                window.history.pushState("", "", "?id="+tryit_console+"#introduction");
                setupConsole(tryit_console);
            },
            error: function(data) {
                $('#tryit_start_panel').css("display", "none");
                $('#tryit_error_missing').css("display", "inherit");
                $('#tryit_error_panel_access').css("display", "inherit");
                $('#tryit_error_panel').css("display", "inherit");
                return
            }
        });
    }

    $('#tryit_terms_checkbox').change(function() {
        if ($('#tryit_terms_checkbox').prop("checked")) {
            $('#tryit_accept').removeAttr("disabled");
        }
        else {
            $('#tryit_accept').attr("disabled", "");
        };
    });

    $('#tryit_accept').click(function() {
        $('#tryit_accept_terms').css("display", "none");
        $('#tryit_terms_panel').css("display", "none");
        $('#tryit_accept').css("display", "none");
        $('#tryit_progress').css("display", "inherit");
        highlightProgress(getIDFromIndex(0));

        $.ajax({
            url: "https://"+tryit_server+"/1.0/start?terms="+tryit_terms_hash
        }).then(function(data) {
            if (data.status && data.status != 0) {
                if (data.status == 1) {
                    window.location.href = original_url;
                    return
                }

                $('#tryit_start_panel').css("display", "none");
                if (data.status == 2) {
                    $('#tryit_error_full').css("display", "inherit");
                }
                else if (data.status == 3) {
                    $('#tryit_error_quota').css("display", "inherit");
                }
                else if (data.status == 4) {
                    $('#tryit_error_banned').css("display", "inherit");
                }
                else if (data.status == 5) {
                    $('#tryit_error_unknown').css("display", "inherit");
                }
                $('#tryit_error_panel_create').css("display", "inherit");
                $('#tryit_error_panel').css("display", "inherit");
                return
            }

            $('.tryit_container_console').text(data.id);
            $('.tryit_container_ip').text(data.ip);
            $('.tryit_container_fqdn').text(data.fqdn);
            $('.tryit_container_username').text(data.username);
            $('.tryit_container_password').text(data.password);
            initializeClock('tryit_console_panel', data.expiry);

            $('#tryit_status_panel').css("display", "none");
            $('#tryit_start_panel').css("display", "none");
            $('#tryit_console_row').css("display", "inherit");
            $('#tryit_examples_panel').css("display", "inherit");
            $('footer.p-footer').css("display", "none");

            tryit_console = data.id;
            window.history.pushState("", "", "?id="+tryit_console);
            window.setTimeout(function() {
                window.location.hash = "introduction";
            }, 200);
            setupConsole(tryit_console);
        });
    });

    $('#tryit_console_reconnect').click(function() {
        setupConsole(tryit_console);
    });

    $('#tryit_intro').on('shown.bs.collapse', function (e) {
        var offset = $('.panel.panel-default > .panel-collapse.in').offset();
        if(offset) {
            $('html,body').animate({
                scrollTop: $('.panel-collapse.in').siblings('.panel-heading').offset().top - 50
            }, 500);
        }
    });

    $('.tabNext').click(function(){
        if (feedback == false && $(this).attr('href') == "#conclusion") {
            $('#tryit_feedback').css("display", "inherit");
        }
    });

    $('.js-collapsable').click(function(){
        $(this).toggleClass('is-hidden');
    });

    $('#tryit_feedback_submit').submit(function(event) {
        event.preventDefault();

        feedbackRating = $('#feedbackRating').val();
        if (feedbackRating == "") {
            feedbackRating = 0
        }

        feedbackEmailUse = 0
        if ($('#feedbackEmailUse').is(':checked')) {
            feedbackEmailUse = 1
        }

        data = JSON.stringify({"rating": parseInt(feedbackRating),
                               "email": $('#feedbackEmail').val(),
                               "email_use": feedbackEmailUse,
                               "message": $('#feedbackText').val()})
        $.ajax({url: "https://"+tryit_server+"/1.0/feedback?id="+tryit_console,
                type: "POST",
                data: data,
                contentType: "application/json"})
        $('#tryit_feedback').css("display", "none");
        feedback = true;
    });

    // The following functions deal with the progress bar and navigation.
    // The navigation is defined in #tryit_navigation.
    // Index: The index number of the li in #tryit_navigation (starting from 0).
    // ID: The name of the li in #tryit_navigation, which must be identical to
    //     the id on the tab-content.

    function getIDFromIndex(index) {
        return $('#tryit_navigation li:eq('+index+')')[0].getAttribute("name");
    };

    function getIndexFromID(id) {
        return $('#tryit_navigation li').index($('#tryit_navigation li[name="'+id+'"]'));
    };

    // Highlight the progress bar button for the given step.
    function highlightProgress(theID) {
         $('#tryit_progress button').each(function() {
            if (this.id === "nav-"+theID) {
                this.classList.add('p-button--brand');
            }
            else  {this.classList.remove('p-button--brand');};
        });
    }

    // Create the progress bar buttons (they are included on every tab-content).
    function createProgressBar() {
        var html = "<div class='p-tab-buttons is-dense'>\n\
             <div class='p-tab-buttons__list' id='tryit_progress'>";

        $('#tryit_navigation li').each(function(index) {
            html += "<button class='p-tab-buttons__button' id='nav-"+this.getAttribute("name")+"'>";
            html += (index+1)+"</button>";
        });

        return html+"</div></div>";
    };

    // Generate the heading containing the navigation number (Index+1) and
    // the title from #tryit_navigation.
    function createHeading(element) {
        var theParent = $(element).parents("div.tab-content")[0];
        var theIndex = getIndexFromID(theParent.id);
        var html = (theIndex+1) +": ";
        html += $($('#tryit_navigation li:eq('+theIndex+')')[0]).text();
        return html;
    };

    // Include generated content.
    $('.tryit_progress_bar').html(createProgressBar());
    $('div.tab-content h3').each(function() {
        $(this).html(createHeading(this));
    });

    // Action for the buttons in the progress bar (go to the new ID and
    // highlight its button).
    $('#tryit_progress button').click(function() {
        realID = this.id.replace("nav-","")

        window.location.href='#'+realID;

        highlightProgress(realID);
    });

    // Action for the "Next" and "Previous" buttons (go to the respective
    // new ID and highlight its button).
    $('.tryit_goto').click(function() {

        theParent = $(this).parents("div.tab-content")[0];

        thisIndex = getIndexFromID(theParent.id);

        var nextIndex = -1;
        if ($(this).text() === "Next") {
            nextIndex = thisIndex + 1;
            if (nextIndex >= $('#tryit_navigation li').length) { nextIndex = 0; };
        }
        else if ($(this).text() === "Previous") {
            nextIndex = thisIndex - 1;
            if (nextIndex < 0) { nextIndex = 0; };
        };

        nextID = getIDFromIndex(nextIndex);

        window.location.href='#'+nextID;

        highlightProgress(nextID);

    });

});
