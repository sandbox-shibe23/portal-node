# Portal
Portal helps to change the directory quickly. 

# install
## MacOS
Portal requires to be run `install.sh`.

```
sh install.sh
``` 
or you can install manually. 

```
#!/bin/bash
echo source `pwd`/portal.sh >> ~/.bash_profile
touch ~/.portal
npm install -g shibe23/portal
```

# Usage

## portal add [label] [dir]
Add `label` and `dir` on `~/.portal` file.

```
pt add dev /path/to/your/directory 
```   

## portal go [label]
Change your current directory.

```
pt go dev
```   

## portal remove [label]
Remove `label` and `dir` from your `~/.portal`

```
pt remove dev
```

## portal list
Show all lists

```
pt list

# dev /path/to/your/directory 
```   

# LICENCE
MIT
