# pumpkinshell

> Work in progress - contributions welcome!

A Halloween-themed terminal prompt with pumpkins, ghosts, and spooky colors. Haunt your terminal.

## Install

```bash
npm install -g pumpkinshell
```

## Usage

```bash
# Show the spooky banner
pumpkinshell banner

# Get the PS1 string for your shell
pumpkinshell ps1

# Print install instructions
pumpkinshell install
```

## Add to your shell

Add this line to your `.bashrc` or `.zshrc`:

```bash
eval "$(npx pumpkinshell ps1)"
```

## Preview

```
(pumpkin) ~/projects >
```

Pumpkin glyphs, orange directories, purple accents. Spooky season all year round.

## Roadmap

- [ ] Animated ghost cursor
- [ ] Configurable color schemes (vampire, witch, zombie)
- [ ] Sound effects on tab completion
- [ ] Seasonal auto-switch (gets spookier in October)

## More themes

Check out my other shell themes:
- [snowshell](https://github.com/dressup-my-shell/snowshell) - Winter-themed prompt with snowflakes
- [retroshell](https://github.com/dressup-my-shell/retroshell) - Retro synthwave terminal vibes
- [oceanshell](https://github.com/dressup-my-shell/oceanshell) - Nautical-themed prompt

## License

MIT
