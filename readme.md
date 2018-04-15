# library project

This is yet another node express app.  I'm just learning!

The below are my follow along notes... I hope to remove/improve these when the app is finished,
so if you're reading this, it's probably a work in progress!

npm install --save packagename

npm install -g packagename
is global

package mgmt

^4.13.3
auto update within 4 (major version) release  ie 4.whatever.whatever
~4.13.2
auto update within 13 (minr version) release ie 4.13.whatever

4.13.2
strictly installs and will not update

npm install debug@2.6.6  will give the specific

debug only runs when you're running in... debug mode

to switch on (in windows) (*nix    DEBUG=* node app.js)
set DEBUG=* & node app.js


test
    "start": "DEBUG=app nodemon app.js",
test
eslint --init
npm scripts in package.json assumes local install of packages- as opposed to global

anything other than test or start require
npm run  ***scriptname***

http://node.green/

ctrl F2 for multi cursor after double clicking on one instance

eslintrc.js gives examples of how to turn rules on or off.
0 ignored
1 warn
2 error