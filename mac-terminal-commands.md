# Mac Terminal Commands - Quick Reference

Open Terminal: **Spotlight (Cmd + Space)** → type "Terminal" → Enter

---

## OS & System Info

| What you want to know | Command |
|---|---|
| macOS version | `sw_vers` |
| Short version only | `sw_vers -productVersion` |
| Computer name & hardware | `system_profiler SPHardwareDataType` |
| CPU info | `sysctl -n machdep.cpu.brand_string` |
| How long Mac has been on | `uptime` |
| Current logged-in user | `whoami` |

---

## Internet & Network Connection

| What you want to know | Command |
|---|---|
| Check if internet is working | `ping -c 4 google.com` |
| Check connection to a specific site | `ping -c 4 apple.com` |
| Your IP address (local/wifi) | `ipconfig getifaddr en0` |
| Your public IP address | `curl ifconfig.me` |
| All network interfaces | `ifconfig` |
| Wi-Fi network name you're on | `networksetup -getairportnetwork en0` |
| DNS servers being used | `scutil --dns \| grep nameserver` |
| Trace route to a website | `traceroute google.com` |
| Check if a port is open | `nc -zv google.com 443` |

---

## Wi-Fi Status

```bash
# Turn Wi-Fi info
/System/Library/PrivateFrameworks/Apple80211.framework/Versions/Current/Resources/airport -I
```

---

## Disk & Storage

| What you want to know | Command |
|---|---|
| Disk space (readable) | `df -h` |
| Just the main disk | `df -h /` |
| Storage usage of current folder | `du -sh .` |
| Largest items in a folder | `du -sh * \| sort -rh \| head -10` |

---

## Memory & CPU

| What you want to know | Command |
|---|---|
| Memory usage summary | `vm_stat` |
| CPU & memory live view | `top` (press `q` to quit) |
| Running processes | `ps aux` |
| Find what's using the most CPU | `ps aux \| sort -rk 3 \| head -10` |

---

## Battery (Laptop)

| What you want to know | Command |
|---|---|
| Battery level & status | `pmset -g batt` |
| Battery health details | `system_profiler SPPowerDataType` |

---

## Quick Checks

```bash
# Is my VPN working? (check if IP changed)
curl ifconfig.me

# Can I reach the internet at all?
ping -c 3 8.8.8.8

# What's my local IP on Wi-Fi?
ipconfig getifaddr en0

# What macOS version am I on?
sw_vers -productVersion
```

---

## Tips

- Press `Ctrl + C` to stop any running command
- Press `q` to quit `top` or `man` pages
- Up arrow recalls previous commands
- `clear` clears the screen
