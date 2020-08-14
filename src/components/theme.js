export const colors = {
  action: {
    primary: {
      default: '#007AFF',
      hover: '#006ADE',
      active: '#005EC6',
    },
    secondary: {
      default: '#27AE60',
      hover: '#229754',
      active: '#1F8B4D',
    },
    danger: {
      default: '#EB5757',
      hover: '#E74C3C',
    },
  },
  asset: {
    info: '#1da1f2',
  },
  base: {
    light: '#FAFAFA',
    dark: '#333333',
  },
  muted: {
    m1: '#F7F4F8',
    m2: '#D9D9D9',
    m3: '#B3B2B2',
    m4: '#8C8C8C',
    m5: '#666666',
  },
  brand: {
    green: '#17FE36',
    orange: '#FF9C49',
    purple: '#A630EA',
    dark: '#14163D',
  }
};

export const borderRadius = {
  default: '0.25rem',
  larger: '0.5rem',
};

export const lengths = {
  header: {
    default: '70px',
  },
};

export const margins = {
  header: `calc(${lengths.header.default} + 20px)`,
};
