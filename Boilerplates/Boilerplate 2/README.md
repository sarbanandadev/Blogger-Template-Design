# Boilerplate for Blogger Template

```bash
<?xml version='1.0' encoding='UTF-8'?>
<!DOCTYPE html>
<html b:css="false" hello="hello" b:js="false" b:responsive="true" b:version="2" expr:dir="data:blog.locale.languageDirection" expr:lang="data:blog.locale.language" prefix="og: http://ogp.me/ns#" xmlns="http://www.w3.org/1999/xhtml" xmlns:b="http://www.google.com/2005/gml/b" xmlns:data="http://www.google.com/2005/gml/data" xmlns:expr="http://www.google.com/2005/gml/expr">

<head>
  <meta expr:charset="data:blog.encoding" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link expr:href="data:blog.blogspotFaviconUrl" rel="icon" type="image/x-icon" />
  <b:with value="data:view.isError ? data:messages.theresNothingHere : (data:view.isLabelSearch ? data:view.search.label : data:view.title.escaped)" var="title">
    <meta expr:content="data:title" property="og:title" />
    <meta expr:content="data:title" name="twitter:title" />
    <title>
      <data:title />
    </title>
  </b:with>
  <meta expr:charset="data:blog.encoding" />
  <meta content="blogger" name="generator" />
  <meta content="summary_large_image" name="twitter:card" />
  <meta expr:content="data:blog.adultContent ? &quot;mature&quot; : &quot;general&quot;" name="rating" />
  <meta expr:content="data:view.isMultipleItems ? &quot;website&quot; : &quot;article&quot;" property="og:type" />
  <meta expr:content="data:view.url.canonical" property="og:url" />
  <meta expr:content="data:view.url.canonical" name="twitter:url" />
  <link expr:href="data:view.url.canonical" rel="canonical" />
  <meta expr:content="data:view.description.escaped" property="og:description" />
  <meta expr:content="data:view.description.escaped" name="twitter:description" />
  <meta expr:content="data:view.description.escaped" name="description" />
  <b:with value="data:view.isHomepage or data:view.isSingleItem ? &quot;index,follow&quot; : &quot;noindex,nofollow&quot;" var="robots">
    <meta expr:content="data:robots" name="robots" />
  </b:with>
  <b:if cond="data:view.featuredImage">
    <link expr:href="data:view.featuredImage" rel="image_src" />
    <meta expr:content="data:view.featuredImage" name="twitter:image" />
    <meta expr:content="data:view.featuredImage" property="og:image" />
  </b:if>
  <b:if cond="data:blog.feedLinks">
    <link expr:href="data:blog.homepageUrl.canonical path &quot;feeds/posts/default&quot;" title="Atom 1.0" rel="alternate" type="application/atom+xml" />
    <link expr:href="data:blog.homepageUrl.canonical path &quot;feeds/posts/default&quot; params {alt: &quot;rss&quot;}" title="RSS 2.0" rel="alternate" type="application/rss+xml" />
  </b:if>
  <script type="application/ld+json">
    {
      "@context": "http://schema.org",
      "@type": "WebSite",
      "url": "<data:blog.homepageUrl.canonical/>",
      "potentialAction": {
        "@type": "SearchAction",
        "target": "<data:blog.searchUrl/>?q={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    }
  </script>
  <style>
    #main {
      background: #ffffff;
    }
  </style>
  <b:if cond="data:view.isPost">h1{font-size:30px}
  </b:if>
  <b:skin>
    <![CDATA[
      /*!
        Theme Name: {{ NAME }}
        Theme URL: {{ URL }}
        Author: {{ AUTHOR NAME }}
        Author URL: {{ AUTHOR URL }}
        Version: {{ THE VERSION }}
        License: Creative Commons Atribucion-NoComercial 4.0 Internacional
        License URL: http://creativecommons.org/licenses/by-nc/4.0/
      */
      /*Fix: Unnecessary elements removed*/
      .widget-item-control,
      .item-control.blog-admin,
      .continue,.loadmore,
      .thread-chrome.thread-collapsed,
      .singleton-element:not(.cookie-choices-info),
      .noAllowNewComments .comment-actions {display:none}
      /*Fix: Show lightbox*/
      .CSS_LIGHTBOX{z-index:90001!important}
      /*Fix: Image responsive*/
      a[imageanchor]:not([style*=float]) {
        margin-right: 0 !important;
        margin-left: 0 !important;
      }
      img[data-original-height],
      img[data-original-width] {height: auto;}
      /*Fix: Comment Editor*/
      #comment-editor{
        border:0;
        width:100%;
        min-height:220px
      }
      /*Fix: Responsive Comments*/
      .fb-comments,
      .fb-comments span,
      .fb-comments iframe,
      .cmt_iframe_holder,
      .cmt_iframe_holder iframe {
        width:100%!important;
        display:block!important
      }
      /* Configurations
      ====================
      <!-- General Options -->
      <Variable name="config.comments" description="Comment system" type="string" default="blogger" value="blogger"/>
    
      <!-- Options for Comments -->
      <Variable name="config.dq.shortname" description="Short name of Disqus" type="string" default="shortname" value="shortname"/>
      <Variable name="config.fb.commentNums" description="Initial number of comments" type="string" default="10" value="10"/>
      <Variable name="config.fb.commentSkin" description="Theme color" type="string" default="light" value="light"/>
      */
    ]]>
  </b:skin>
  <b:template-skin>
    <![CDATA[ 
  /* => Your Layout Styles */
]]>
  </b:template-skin>
</head>

<body>
  <b:section id="Blog">
    <b:widget id="Blog1" locked="true" title="Blog Posts" type="Blog">
    
      <b:includable id="post" var="post">
        <b:if cond='data:view.isMultipleItems'>
          <b:elseif cond='data:view.isPost' />
          <b:elseif cond='data:view.isPage' />
        </b:if>
      </b:includable>
      
      <b:includable id="main" var="top">
        <!-- Basic structure of example. You can delete from here {{ -->
        <b:if cond='data:view.isMultipleItems'>
          <b:loop values="data:posts" var="post">
            <b:include data="post" name="post" /><!-- Include posts -->
          </b:loop>
          <b:include name="nextprev" /><!-- Include pagination -->
          <b:else />
          <b:loop values="data:posts" var="post">
            <b:include data="post" name="post" /><!-- Include posts -->
            <b:include data="post" name="comments" /><!-- Include comments -->
          </b:loop>
        </b:if>
        <!-- }} Up to this point -->
      </b:includable>
      
      <b:includable id="comments-blogger" var="post">
        <b:if cond="data:post.commentSource == 1">
          <b:include data="post" name="iframe_comments" />
          <b:else />
          <b:include data="post" name="comment_picker" />
        </b:if>
      </b:includable>
      
      <b:includable id="comments-disqus" var="post">
        <div id="disqus_thread"></div>
        <script>
          var disqus_shortname = "<data:skin.vars.config_dq_shortname/>",
            disqus_config = function() {
              this.page.url = "<data:view.url.canonical/>";
              this.page.title = "<data:view.title.escaped/>";
            };
          //<![CDATA[
          (function() {
            var d = document,
              s = d.createElement('script');
            s.async = true;
            s.src = '//' + disqus_shortname + '.disqus.com/embed.js';
            s.setAttribute('data-timestamp', +new Date());
            (d.head || d.body).appendChild(s);
          })();
          //]]>
        </script>
      </b:includable>
      
      <b:includable id="comments-facebook" var="post">
        <div class="fb-comments" expr:data-colorscheme="data:skin.vars.config_fb_commentSkin" expr:data-href="data:view.url.canonical" expr:data-numposts="data:skin.vars.config_fb_commentNums"></div>
      </b:includable>
      
      <b:includable id="comment_picker" var="post">
        <div class="comments" id="comments">
          <b:class cond="!data:post.allowNewComments" name="noAllowNewComments" />
          <div class="comments-content">
            <div id="comment-holder">
              <data:post class="commentHtml" />
            </div>
            <b:include data="post" name="threaded_comment_js" />
          </div>
          <b:include data="post" expr:name="data:post.allowNewComments ? &quot;threaded-comment-form&quot; : &quot;status-message&quot;" />
        </div>
      </b:includable>
      
      <b:includable id="comments" var="post">
        <b:if cond="data:post.allowComments">
          <b:include data="post" expr:name="data:view.isPreview ? &quot;status-message&quot; : &quot;comments-&quot; + data:skin.vars.config_comments" />
        </b:if>
      </b:includable>
      
      <b:includable id="iframe_comments" var="post">
        <script expr:src="data:post.iframeCommentSrc" />
        <div class="cmt_iframe_holder" expr:data-href="data:post.url.canonical" expr:data-viewtype="data:post.viewType"></div>
      </b:includable>
      
      <b:includable id='backlinkDeleteIcon' var='backlink'>
        <!--none-->
      </b:includable>
      <b:includable id='backlinks' var='post'>
        <!--none-->
      </b:includable>
      <b:includable id='comment-form' var='post'>
        <!--none-->
      </b:includable>
      <b:includable id='commentDeleteIcon' var='comment'>
        <!--none-->
      </b:includable>
      <b:includable id='comment_count_picker' var='post'>
        <!--none-->
      </b:includable>
      <b:includable id='feedLinks'>
        <!--none-->
      </b:includable>
      <b:includable id='feedLinksBody' var='links'>
        <!--none-->
      </b:includable>
      <b:includable id='mobile-index-post' var='post'>
        <!--none-->
      </b:includable>
      <b:includable id='mobile-main' var='top'>
        <!--none-->
      </b:includable>
      <b:includable id='mobile-nextprev'>
        <!--none-->
      </b:includable>
      <b:includable id='mobile-post' var='post'>
        <!--none-->
      </b:includable>
      <b:includable id='postQuickEdit' var='post'>
        <!--none-->
      </b:includable>
      <b:includable id='shareButtons'>
        <!--none-->
      </b:includable>
      <b:includable id='status-message'>
        <!--none-->
      </b:includable>
      <b:includable id='threaded_comments' var='post'>
        <!--none-->
      </b:includable>
    </b:widget>
  </b:section>
  <script>
    // Javascript here
  </script>
</body>

</html>
```

Source: `https://github.com/Rashuoo7/Blogger-Boilerplate-Template`
