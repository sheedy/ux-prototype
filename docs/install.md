This will eventually all be handled by a script (optional).

#### [Homebrew](http://brew.sh/) - The missing package manager for OS X

```
ruby -e "$(curl -fsSL https://raw.github.com/Homebrew/homebrew/go/install)"
```

### [rbenv](https://github.com/sstephenson/rbenv) - Ruby environment management

Avoid having to wait for docs to install when installing gems.

```
echo 'gem: --no-rdoc --no-ri' >> ~/.gemrc
```
#### Install rbenv

```
brew update
brew install rbenv ruby-build
echo 'eval "$(rbenv init -)"' >> ~/.bash_profile
```

If you're using zsh or [oh-my-zsh](https://github.com/robbyrussell/oh-my-zsh) (you should be)

```
echo 'eval "$(rbenv init -)"' >> ~/.zshrc
```

I use `zsh` as my shell instead of bash. You can view my setup [here](https://github.com/sheedy/dotfiles).

#### Install a ruby version and make it the default

```
rbenv install 2.0.0-p247
rbenv rehash
rbenv global 2.0.0-p247
```

#### [Node](http://nodejs.org/)

```
brew install node
```

#### [Sass](sass-lang.com), [Compass](http://compass-style.org/), [Bundler](http://bundler.io/)

```
gem install sass compass bundler
```

```
mkdir ~/.bundle
echo 'BUNDLE_PATH: vendor/bundle' >> ~/.bundle/config
```

#### [Grunt](http://gruntjs.com/) & [Bower](http://bower.io/)

```
npm install -g grunt-cli bower
```

