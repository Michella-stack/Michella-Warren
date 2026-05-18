# Terminal & Command Line — Personal Guidebook
### Works on: Mac (Terminal) · Windows (Command Prompt / PowerShell)

---

> **How to open the terminal:**
> - **Mac:** Press `Cmd + Space` → type `Terminal` → Enter
> - **Windows:** Press `Win + R` → type `cmd` → Enter *(Command Prompt)*
> - **Windows PowerShell:** Press `Win + X` → click *Terminal* or *PowerShell*

---

---

# PART 1 — MOVING AROUND (Navigation)

Think of the terminal like a file explorer, but text-based.
You are always "inside" a folder. These commands move you around.

---

## Mac / Linux

| What you want to do | Command | Example |
|---|---|---|
| See where you are | `pwd` | `/Users/michella` |
| List files in current folder | `ls` | shows files |
| List with more detail | `ls -la` | shows sizes, dates, hidden files |
| Go into a folder | `cd foldername` | `cd Documents` |
| Go back one folder | `cd ..` | moves up one level |
| Go to your home folder | `cd ~` | shortcut to home |
| Go to Desktop | `cd ~/Desktop` | |
| Clear the screen | `clear` | |

---

## Windows (Command Prompt)

| What you want to do | Command | Example |
|---|---|---|
| See where you are | `cd` | `C:\Users\Michella` |
| List files | `dir` | shows files |
| Go into a folder | `cd foldername` | `cd Documents` |
| Go back one folder | `cd ..` | |
| Go to Desktop | `cd %USERPROFILE%\Desktop` | |
| Clear the screen | `cls` | |

---

## Windows (PowerShell) — same as Mac mostly

| What you want to do | Command |
|---|---|
| See where you are | `pwd` |
| List files | `ls` or `dir` |
| Go into a folder | `cd foldername` |
| Go back | `cd ..` |
| Clear screen | `clear` or `cls` |

---

### Practice Exercise 1 — Navigation
```
1. Open terminal
2. Type: pwd        (see where you are)
3. Type: ls         (see what's here)
4. Type: cd Desktop (go to Desktop)
5. Type: ls         (see Desktop files)
6. Type: cd ..      (go back)
7. Type: pwd        (confirm you went back)
```

---

---

# PART 2 — FILES & FOLDERS

---

## Mac / Linux

| What you want to do | Command | Example |
|---|---|---|
| Create a new folder | `mkdir foldername` | `mkdir myfolder` |
| Create an empty file | `touch filename` | `touch notes.txt` |
| Copy a file | `cp file destination` | `cp notes.txt Desktop/` |
| Move or rename a file | `mv file destination` | `mv notes.txt oldnotes.txt` |
| Delete a file | `rm filename` | `rm notes.txt` |
| Delete an empty folder | `rmdir foldername` | |
| Delete folder + contents | `rm -rf foldername` | **careful — no undo!** |
| Read a file in terminal | `cat filename` | `cat notes.txt` |
| Read long file page by page | `less filename` | press `q` to quit |

---

## Windows (Command Prompt)

| What you want to do | Command | Example |
|---|---|---|
| Create a new folder | `mkdir foldername` | `mkdir myfolder` |
| Create an empty file | `echo. > filename` | `echo. > notes.txt` |
| Copy a file | `copy file destination` | `copy notes.txt Desktop\` |
| Move or rename a file | `move file destination` | `move notes.txt old.txt` |
| Delete a file | `del filename` | `del notes.txt` |
| Delete a folder | `rmdir /s foldername` | **careful — no undo!** |
| Read a file | `type filename` | `type notes.txt` |

---

### Practice Exercise 2 — Files
```
Mac:
1. cd ~/Desktop
2. mkdir practice_folder
3. cd practice_folder
4. touch hello.txt
5. ls                     (you should see hello.txt)
6. cd ..
7. rm -rf practice_folder (clean up)

Windows:
1. cd %USERPROFILE%\Desktop
2. mkdir practice_folder
3. cd practice_folder
4. echo. > hello.txt
5. dir
6. cd ..
7. rmdir /s practice_folder
```

---

---

# PART 3 — SYSTEM INFORMATION

---

## Mac

| What you want to know | Command |
|---|---|
| macOS version | `sw_vers` |
| macOS version (short) | `sw_vers -productVersion` |
| Computer name & chip | `system_profiler SPHardwareDataType` |
| Processor type | `sysctl -n machdep.cpu.brand_string` |
| How long Mac has been on | `uptime` |
| Who is logged in | `whoami` |
| All users on this Mac | `ls /Users` |
| Date and time | `date` |

---

## Windows

| What you want to know | Command |
|---|---|
| Windows version | `winver` *(opens a popup)* |
| System info (detailed) | `systeminfo` |
| Computer name | `hostname` |
| Who is logged in | `whoami` |
| Uptime | `systeminfo \| find "Boot Time"` |
| Date and time | `date /t` and `time /t` |

---

### Practice Exercise 3 — Know Your Machine
```
Mac:
1. sw_vers -productVersion     (what macOS?)
2. whoami                      (who are you?)
3. uptime                      (how long has it been on?)

Windows:
1. winver                      (what Windows version?)
2. whoami
3. hostname
```

---

---

# PART 4 — INTERNET & NETWORK

---

## Mac & Windows — These commands work on both

| What you want to know | Command (Mac & Windows) |
|---|---|
| Test internet connection | `ping google.com` |
| Ping 4 times only (Mac) | `ping -c 4 google.com` |
| Ping 4 times only (Windows) | `ping -n 4 google.com` |
| Trace route to a site | `traceroute google.com` (Mac) |
| Trace route (Windows) | `tracert google.com` |
| Look up a website's IP | `nslookup google.com` |
| See all network connections | `netstat` |

---

## Mac — Network details

| What you want to know | Command |
|---|---|
| Your local Wi-Fi IP | `ipconfig getifaddr en0` |
| Your public IP | `curl ifconfig.me` |
| All network interfaces | `ifconfig` |
| Wi-Fi network name | `networksetup -getairportnetwork en0` |
| DNS servers | `scutil --dns \| grep nameserver` |
| Full network status | `networksetup -listallnetworkservices` |

---

## Windows — Network details

| What you want to know | Command |
|---|---|
| Your IP & network info | `ipconfig` |
| Full network details | `ipconfig /all` |
| Your public IP | `curl ifconfig.me` or visit whatismyip.com |
| Flush DNS cache | `ipconfig /flushdns` |
| Release & renew IP | `ipconfig /release` then `ipconfig /renew` |
| DNS lookup | `nslookup google.com` |

---

### Practice Exercise 4 — Network Checks
```
Mac:
1. ping -c 4 google.com       (is internet working?)
2. ipconfig getifaddr en0     (what's my local IP?)
3. curl ifconfig.me           (what's my public IP?)
4. nslookup bbc.co.uk         (what IP does BBC use?)

Windows:
1. ping -n 4 google.com
2. ipconfig
3. nslookup bbc.co.uk
```

---

---

# PART 5 — DISK & STORAGE

---

## Mac

| What you want to know | Command |
|---|---|
| Disk space (easy to read) | `df -h` |
| Just the main drive | `df -h /` |
| Size of current folder | `du -sh .` |
| Largest items here | `du -sh * \| sort -rh \| head -10` |
| List all disks | `diskutil list` |

---

## Windows

| What you want to know | Command |
|---|---|
| Disk space | `wmic logicaldisk get size,freespace,caption` |
| Disk info | `diskpart` *(type `list disk` inside, then `exit`)* |
| Folder size | `dir /s foldername` |

---

---

# PART 6 — MEMORY & CPU (Performance)

---

## Mac

| What you want to know | Command |
|---|---|
| Live CPU & memory view | `top` *(press `q` to quit)* |
| All running processes | `ps aux` |
| Top CPU users | `ps aux \| sort -rk 3 \| head -10` |
| Memory usage | `vm_stat` |
| Kill a frozen app | `killall AppName` e.g. `killall Safari` |
| Kill by process ID | `kill 1234` *(use `top` to find the ID)* |

---

## Windows

| What you want to know | Command |
|---|---|
| Running processes | `tasklist` |
| Kill a process | `taskkill /IM appname.exe /F` |
| Kill by ID | `taskkill /PID 1234 /F` |
| CPU & memory in task manager | `taskmgr` *(opens Task Manager)* |

---

---

# PART 7 — BATTERY (Laptops)

---

## Mac

| What you want to know | Command |
|---|---|
| Battery level & charging? | `pmset -g batt` |
| Battery health & full details | `system_profiler SPPowerDataType` |

---

## Windows

| What you want to know | Command |
|---|---|
| Battery report (saved as HTML) | `powercfg /batteryreport` |
| Quick battery status | Check taskbar, or run `powercfg /batteryreport` |

---

---

# PART 8 — USEFUL SHORTCUTS & TIPS

---

## Keyboard Shortcuts (Mac Terminal)

| Shortcut | What it does |
|---|---|
| `Ctrl + C` | Stop / cancel the current command |
| `Ctrl + Z` | Pause a running command |
| `Ctrl + L` | Clear the screen (same as `clear`) |
| `Ctrl + A` | Jump to start of line |
| `Ctrl + E` | Jump to end of line |
| `Up arrow` | Recall previous command |
| `Down arrow` | Go forward in command history |
| `Tab` | Auto-complete a file or folder name |
| `Tab Tab` | Show all possible completions |
| `history` | Show your last commands |

---

## Keyboard Shortcuts (Windows CMD / PowerShell)

| Shortcut | What it does |
|---|---|
| `Ctrl + C` | Stop / cancel the current command |
| `Up arrow` | Recall previous command |
| `Tab` | Auto-complete |
| `F7` | Show command history in a list |
| `cls` | Clear screen |

---

## General Tips

```
- Commands are case-sensitive on Mac, not on Windows
- Spaces matter — don't add extra spaces in commands
- If a command keeps running, press Ctrl+C to stop it
- Tab auto-complete saves typing and prevents typos
- Use up-arrow to repeat commands you've used before
- If you get "permission denied" on Mac, add sudo before:
    sudo command-here
  (it will ask for your password)
- On Mac, your password won't show as you type — that's normal
```

---

---

# PART 9 — QUICK REFERENCE CHEAT SHEET
*(Tear-off / print this page)*

---

## ALWAYS USEFUL

```bash
# Where am I?
pwd                            # Mac/Win PowerShell
cd                             # Windows CMD

# What's in this folder?
ls                             # Mac
dir                            # Windows

# Go somewhere
cd Desktop
cd ..                          # go back one level
cd ~                           # Mac home folder

# Internet working?
ping -c 4 google.com           # Mac
ping -n 4 google.com           # Windows

# My IP addresses
ipconfig getifaddr en0         # Mac local IP
curl ifconfig.me               # Mac public IP
ipconfig                       # Windows

# What OS/version am I on?
sw_vers -productVersion        # Mac
winver                         # Windows

# How much disk space?
df -h /                        # Mac
wmic logicaldisk get size,freespace,caption   # Windows

# Battery?
pmset -g batt                  # Mac

# Stop any command
Ctrl + C
```

---

---

# PART 10 — PRACTICE PLAN

Work through these in order. No rush — even 10 minutes a day builds confidence fast.

---

### Week 1 — Get comfortable moving around
- [ ] Open Terminal / CMD every day
- [ ] Use `pwd` / `cd` / `ls` / `dir` to explore folders
- [ ] Navigate to Desktop, Documents, Downloads using `cd`
- [ ] Use Tab to auto-complete folder names

### Week 2 — Files
- [ ] Create a practice folder with `mkdir`
- [ ] Create files with `touch` (Mac) or `echo. >` (Windows)
- [ ] Copy and move files
- [ ] Delete your practice folder when done

### Week 3 — Know your machine
- [ ] Check OS version
- [ ] Check who's logged in
- [ ] Check uptime
- [ ] Check disk space

### Week 4 — Network
- [ ] Ping google.com
- [ ] Find your local IP
- [ ] Find your public IP
- [ ] Look up a website with `nslookup`

### Ongoing — Mix it up
- [ ] Check battery each morning with `pmset -g batt`
- [ ] Use `top` / `tasklist` to see what's running
- [ ] Try `history` to review commands you've used

---

---

*Last updated: May 2026 | Works on macOS 12+ and Windows 10/11*
