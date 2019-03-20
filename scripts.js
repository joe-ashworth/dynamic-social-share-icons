(function () {
  const thisUrl = window.location.href;
  const thisDescrip = $('.page-title').text();

  function Share(url, description) {
    this.fbLink = 'https://facebook.com/sharer/sharer.php?u' + url;

    this.twitterLink = 'https://twitter.com/intent/tweet/?text=' + description + '&amp;url=' + url

    this.emailLink = 'mailto:?subject=' + description + '&body=' + url

    this.linkedLink = 'https://www.linkedin.com/shareArticle?mini=true&url=' + url + '&title=' + description + '&summary=' + description
  }

  const share = new Share(thisUrl, thisDescrip);
  console.log(share)

  $('.fbA').attr('href', share.fbLink);
  $('.twitterA').attr('href', share.twitterLink);
  $('.emailA').attr('href', share.emailLink);
  $('.linkedA').attr('href', share.linkedLink);
}());