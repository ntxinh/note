
# Theme for Git Bash

```
1. cd ~
2. git clone --depth=1 https://github.com/Bash-it/bash-it.git ~/.bash_it
3.  ~/.bash_it/install.sh
4. Edit ~/.bashrc
```

# Oh my zsh

1. Install zsh (sudo pacman -S zsh)
2. Install Oh My Zsh 
via curl 
```
sh -c "$(curl -fsSL https://raw.githubusercontent.com/robbyrussell/oh-my-zsh/master/tools/install.sh)"
```
via wget
```
sh -c "$(wget https://raw.githubusercontent.com/robbyrussell/oh-my-zsh/master/tools/install.sh -O -)"
```
3. Change your default shell (If auto set not work)
```
chsh -s /bin/zsh
```
4. Edit the ~/.zshrc file
```
ZSH_THEME="agnoster"
```
5. Install powerline/fonts
```
# clone
git clone https://github.com/powerline/fonts.git
# install
cd fonts
./install.sh
# clean-up a bit
cd ..
rm -rf fonts
```