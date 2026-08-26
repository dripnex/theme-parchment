/**
 * Parchment — official Dripnex theme.
 * Token layer only. Same contract as a community theme repo.
 * Must be CommonJS.
 */

const TOKENS = {
  '--bg-base': '#f3ead4',
  '--bg-surface': '#ebe0c4',
  '--bg-elevated': '#faf3e3',
  '--bg-inset': '#e6d9b8',
  '--bg-hover': 'rgba(58, 50, 36, 0.06)',
  '--bg-active': 'rgba(58, 50, 36, 0.1)',
  '--text-primary': '#3a3224',
  '--text-secondary': 'rgba(58, 50, 36, 0.74)',
  '--text-muted': 'rgba(58, 50, 36, 0.52)',
  '--text-faint': 'rgba(58, 50, 36, 0.34)',
  '--border': 'rgba(58, 50, 36, 0.12)',
  '--border-subtle': 'rgba(58, 50, 36, 0.07)',
  '--border-strong': 'rgba(58, 50, 36, 0.18)',
  '--accent': '#2a7d6f',
  '--accent-hover': '#21675c',
  '--accent-muted': 'rgba(42, 125, 111, 0.16)',
  '--accent-subtle': 'rgba(42, 125, 111, 0.1)',
  '--glass-bg': 'rgba(243, 234, 212, 0.9)',
  '--glass-border': 'rgba(58, 50, 36, 0.1)',
  '--glass-bg-menu': 'rgba(250, 243, 227, 0.96)',
  '--glass-border-menu': 'rgba(58, 50, 36, 0.1)',
  '--status-active': '#2a7d6f',
  '--status-on-hold': '#c27a1a',
  '--status-completed': '#3d8b4a',
  '--status-dropped': '#c44b4b',
};

module.exports = {
  id: 'theme-parchment',
  name: 'Parchment',
  version: '0.1.1',
  description: 'Warm paper palette. Official Dripnex theme.',

  activate(context) {
    const remove = context.registerTheme({
      id: 'dripnex-parchment',
      name: 'Parchment',
      description: 'Warm paper. Reading notes, long sessions.',
      author: 'Dripnex',
      colorScheme: 'light',
      tokens: TOKENS,
    });

    return {
      dispose() {
        remove();
      },
    };
  },
};
