export const transitions = <const>{
  property: {
    common:
      'background-color,border-color,color,fill,stroke,opacity,box-shadow,transform',
    colors: 'background-color,border-color,color,fill,stroke',
    dimensions: 'width,height',
    position: 'left,right,top,bottom',
    background: 'background-color,background-image,background-position',
  },
  duration: {
    instant: '0ms',
    faster: '100ms',
    fast: '200ms',
    normal: '300ms',
    slow: '400ms',
    slower: '500ms',
  },
  easing: {
    'ease-in': 'cubic-bezier(0.4, 0, 1, 1)',
    'ease-out': 'cubic-bezier(0, 0, 0.2, 1)',
    'ease-in-out': 'cubic-bezier(0.4, 0, 0.2, 1)',
  },
};
