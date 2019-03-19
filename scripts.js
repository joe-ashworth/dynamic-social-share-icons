
const share = {
  thisUrl: window.location.href
}
share.thisDescrip = $('.page-title').text();
share.fbLink =
  'https://facebook.com/sharer/sharer.php?u' +
  share.thisUrl;
share.twitterLink =
  'https://twitter.com/intent/tweet/?text=' +
  share.thisDescrip + '&amp;url=' +
  share.thisUrl
share.emailLink =
  'mailto:?subject=' +
  share.thisDescrip +
  '&amp;body=' +
  share.thisUrl
share.linkedLink =
  'https://www.linkedin.com/shareArticle?mini=true&amp;url=' +
  share.thisUrl + '&amp;title=' +
  share.thisDescrip
console.log(share)

$('.fbA').attr('href', share.fbLink);
$('.twitterA').attr('href', share.twitterLink);
$('.emailA').attr('href', share.emailLink);
$('.linkedA').attr('href', share.linkedLink); 
