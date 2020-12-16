# Deno Example Project Structure

### Install Deno

Shell (Mac, Linux):

```sh
curl -fsSL https://deno.land/x/install/install.sh | sh
```

PowerShell (Windows):

```powershell
iwr https://deno.land/x/install/install.ps1 -useb | iex
```

[Homebrew](https://formulae.brew.sh/formula/deno) (Mac):

```sh
brew install deno
```

[Chocolatey](https://chocolatey.org/packages/deno) (Windows):

```powershell
choco install deno
```

Build and install from source using [Cargo](https://crates.io/crates/deno):

```sh
cargo install deno
```

Read more https://github.com/denoland/deno/#deno

### Getting Started

First install denon if you don't exist
```sh
deno install -qAf --unstable https://deno.land/x/denon/denon.ts
```

try this to running
```sh
denon dev
```

### How to build

```sh
deno compile --import-map importmap.json --unstable ./src/app.ts
```
