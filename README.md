# Portal
Portal helps to change the directory quickly. 

# install
Portal requires to be run `install.sh`.

```
sh install.sh
``` 
or you can install manually. 

```
#!/bin/bash
echo source `pwd`/portal.sh >> ~/.bash_profile
```

# Usage

## portal add [label] [dir]
Add `label` and `dir` on `~/.portal` file.

```
portal add dev /path/to/your/directory 
```   

## portal go [label]
Change your current directory.

```
portal go dev
```   

## portal remove [label]
Remove `label` and `dir` from your `~/.portal`

```
portal remove dev
```

## portal list
Show all lists

```
portal list

# dev /path/to/your/directory 
```   

# LICENCE
MIT
