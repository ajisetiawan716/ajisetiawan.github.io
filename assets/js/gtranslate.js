<script type="text/javascript">
function googleTranslateElementInit() {
  new google.translate.TranslateElement({
    pageLanguage: 'en',
    autoDisplay: false,
    layout: google.translate.TranslateElement.InlineLayout.VERTICAL
  }, 'google_translate_element');

  // Links to cross-origin destinations are unsafe
  var gll = document.getElementsByClassName('goog-logo-link')[0];
  if (gll) {
    gll.setAttribute('rel', 'noopener');
  }

  function restoreLang() {
    var iframe = document.getElementsByClassName('goog-te-banner-frame')[0];
    if (!iframe) return;

    var innerDoc = iframe.contentDocument || iframe.contentWindow.document;
    var restore_el = innerDoc.getElementsByTagName("button");

    for (var i = 0; i < restore_el.length; i++) {
      if (restore_el[i].id.indexOf("restore") >= 0) {
        restore_el[i].click();
        var close_el = innerDoc.getElementsByClassName("goog-close-link");
        close_el[0].click();
        return;
      }
    }
  }

  function triggerHtmlEvent(element, eventName) {
    var event;
    if (document.createEvent) {
      event = document.createEvent('HTMLEvents');
      event.initEvent(eventName, true, true);
      element.dispatchEvent(event);
    } else {
      event = document.createEventObject();
      event.eventType = eventName;
      element.fireEvent('on' + event.eventType, event);
    }
  }

  var googleCombo = document.querySelector("select.goog-te-combo");
  var langSelect = document.querySelector('.ct-language');
  langSelect.addEventListener('click', function(event) {
    if (!event.target) {
      return;
    }

    var selected = document.querySelector('.ct-language .ct-language-selected');
    if (selected) {
      selected.classList.remove('ct-language-selected');
    }

    var target = event.target;
    while (target && target !== langSelect ) {
      if (target.matches('.lang-select')) {
        break;
      }
      target = target.parentElement;
    }

    if (target && target.matches('.lang-select')) {
      var lang = target.getAttribute('data-lang');
      if (googleCombo.value == lang) {
        restoreLang();
      } else {
        target.parentElement.classList.add('ct-language-selected');
        googleCombo.value = lang;
        triggerHtmlEvent(googleCombo, 'change');
      }
    }

    event.preventDefault();
  });
}
</script>
