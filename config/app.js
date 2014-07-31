
// application server options
var server = require('./server.json');
// oauth application credentials
var credentials = require('./credentials.json');
// provider oauth settings
var oauth = require('./oauth.js');


// consumer oauth application options
var options = {
  facebook: {
    scope: 'publish_actions,publish_stream,read_stream,manage_pages,user_groups,friends_groups',
    callback: server.callback
  },
  linkedin: {
    scope: 'r_basicprofile,r_fullprofile,r_emailaddress,r_network,r_contactinfo,rw_nus,rw_company_admin,rw_groups,w_messages',
    callback: server.callback
  },
  twitter: {
    callback: server.callback
  },
  stocktwits: {
    scope: 'read,watch_lists,publish_messages,publish_watch_lists,follow_users,follow_stocks',
    callback: server.callback
  },
  soundcloud: {
    redirect: server.callback+'/connect/soundcloud/callback',//full path callback match
    scope: 'non-expiring',
    callback: server.callback
  },
  bitly: {
    redirect: server.callback+'/connect/bitly/callback',//full path callback match
    callback: server.callback
  },
  github: {
    headers: {'User-Agent': 'AppName'},//add custom headers (not required)
    redirect: server.callback+'/connect/github/callback',
    callback: server.callback
  },
  stackexchange: {
    callback: server.callback
  },
  google: {
    redirect: server.callback+'/connect/google/callback',
    scope:
      'https://www.googleapis.com/auth/userinfo.profile '+
      'https://www.googleapis.com/auth/youtube.readonly '+
      'https://www.googleapis.com/auth/drive.readonly '+
      'https://www.googleapis.com/auth/freebase '+
      'https://www.googleapis.com/auth/tasks '+
      'https://www.googleapis.com/auth/yt-analytics.readonly',
    callback: server.callback
  },
  yahoo: {
    callback: server.callback
  },
  foursquare: {
    callback: server.callback
  },
  slack: {
    callback: server.callback
  },
  instagram: {
    redirect: server.callback+'/connect/instagram/callback',
    callback: server.callback
  },
  flickr: {
    callback: server.callback
  },
  disqus: {
    redirect: server.callback+'/connect/disqus/callback',
    scope: 'read,write',
    callback: server.callback
  },
  trello: {
    callback: server.callback
  },
  asana: {
    redirect: server.callback+'/connect/asana/callback',
    callback: server.callback
  },
  mailchimp: {
    redirect: server.callback+'/connect/mailchimp/callback',
    callback: server.callback
  },
  heroku: {
    // set config/server.js protocol to https
    callback: server.callback
  },
  dropbox: {
    // set config/server.js protocol to https
    // npm install git://github.com/simov/mashape-oauth.js.git#oauth2-type
    redirect: server.callback+'/connect/dropbox/callback',
    callback: server.callback
  }
};

exports = module.exports = {
  server: server,
  credentials: credentials,
  oauth: oauth,
  app: function (provider) {
    return oauth[provider].get(credentials[provider], options[provider]);
  }
};