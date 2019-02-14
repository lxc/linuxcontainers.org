var dropdownToggles = document.querySelectorAll('.p-dropdown__toggle');
var dropdownToggleLinks = document.querySelectorAll('.p-dropdown__toggle-link');

function isDescendant(parent, child) {
  var node = child.parentNode;
  while (node != null) {
    if (node == parent) {
      return true;
    }
    node = node.parentNode;
  }
  return false;
}

dropdownToggleLinks.forEach(function(dropdownToggleLink) {
  dropdownToggleLink.addEventListener('click', function(event) {
    event.preventDefault();
  });
});

dropdownToggles.forEach(function(dropdownToggle) {
  dropdownToggle.addEventListener('click', function(event) {
    event.stopPropagation();

    var clickedDropdown = this;

    dropdownToggles.forEach(function(dropdownToggle) {
      var dropdownContent = document.getElementById(dropdownToggle.id + "-menu");

      if (dropdownToggle === clickedDropdown) {
        if (dropdownToggle.classList.contains('is-active')) {
          closeMenu(dropdownToggle, dropdownContent);
        } else {
          dropdownToggle.classList.add('is-active');
          dropdownContent.classList.remove('u-hide');

          if (window.history.pushState) {
            window.history.pushState(null, null, '#' + dropdownToggle.id);
          }
        }
      } else {
        if (!isDescendant(dropdownContent, clickedDropdown)) {
          dropdownToggle.classList.remove('is-active');
          dropdownContent.classList.add('u-hide');
        }
      }
    });
  });
});

function closeMenu(dropdownToggle, dropdownContent) {
  dropdownToggle.classList.remove('is-active');
  if (window.history.pushState) {
    window.history.pushState(null, null, window.location.href.split('#')[0]);
  }
}

if (window.location.hash) {
  var tabId = window.location.hash.split('#')[1];
  var tab = document.getElementById(tabId);
  var tabContent = document.getElementById(tabId + '-menu');

  if (tab) {
    setTimeout(function() {
      document.getElementById(tabId).click();
    }, 0);
  }
}

function closeMainMenu() {
  var navigationLinks = document.querySelectorAll('.p-dropdown__toggle');

  navigationLinks.forEach(function(navLink) {
    navLink.classList.remove('is-active');
  });
}

document.addEventListener('click', function(event) {
  if (!event.target.closest('.p-dropdown__link') && !event.target.closest('.p-dropdown__toggle a')) {
    closeMainMenu();
  }
});
