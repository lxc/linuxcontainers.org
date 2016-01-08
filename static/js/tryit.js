$(document).ready(function() {
    var tryit_terms_hash = "";
    var tryit_console = "";
    var tryit_server = "lxd-demo.linuxcontainers.org";
    var original_url = window.location.href.split("?")[0];
    var term = null
    var sock = null

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

        var height = Math.max(Math.round(window.innerHeight / 50), 20);
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

            x       = cell.clientWidth / 21,
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

                initializeClock('tryit_clock', data.expiry);

                $('#tryit_status_panel').css("display", "none");
                $('#tryit_start_panel').css("display", "none");
                $('#tryit_info_panel').css("display", "inherit");
                $('#tryit_console_panel').css("display", "inherit");
                $('#tryit_examples_panel').css("display", "inherit");

                tryit_console = data.id;
                window.history.pushState("", "", "?id="+tryit_console);
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

    $('#tryit_accept').click(function() {
        $('#tryit_terms_panel').css("display", "none");
        $('#tryit_accept').css("display", "none");
        $('#tryit_progress').css("display", "inherit");

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
            initializeClock('tryit_clock', data.expiry);

            $('#tryit_status_panel').css("display", "none");
            $('#tryit_start_panel').css("display", "none");
            $('#tryit_info_panel').css("display", "inherit");
            $('#tryit_console_panel').css("display", "inherit");
            $('#tryit_examples_panel').css("display", "inherit");

            tryit_console = data.id;
            window.history.pushState("", "", "?id="+tryit_console);
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
});
