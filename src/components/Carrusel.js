import React, { useEffect, useRef } from 'react';
import './Carrusel.css';
import neon from '../photos/neon-paradise.jpg';
import lines from '../photos/lines.jpg';
import trees from '../photos/trees.jpg';
import color from '../photos/color.jpg';
import grid from '../photos/purple-grid.jpg';
import circuit from '../photos/ciber-circuit.jpg';

const slides = [
  {
    title: 'C#',
    subtitle: 'ASP.NET, Auth0',
    description: 'Solid, Kiss, Dry',
    image:
    neon,
  },
  {
    title: 'Javascript',
    subtitle: 'Node.JS',
    description: 'Kiss, Dry',
    image:
    lines,
  },
  {
    title: 'HTML, CSS',
    subtitle: 'Sass, BEM',
    description: 'Kiss, Dry',
    image:
    trees,
  },
  {
    title: 'React',
    subtitle: 'Tailwind, Auth0',
    description: 'Kiss, Dry',
    image:
    color,
  },
  {
    title: 'AZURE',
    subtitle: 'GitHub Actions',
    description: 'Agile',
    image:
    grid,
  },
  {
    title: 'TDD',
    subtitle: 'Mocha, Jest, Cypruss, Xunit',
    description: 'Test, Test, Test ...',
    image:
    circuit,
  },
];

function useTilt(active) {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current || !active) {
      return;
    }

    const state = {
      rect: undefined,
      mouseX: undefined,
      mouseY: undefined,
    };

    const el = ref.current;

    const handleMouseMove = (e) => {
      if (!el) {
        return;
      }
      if (!state.rect) {
        state.rect = el.getBoundingClientRect();
      }
      state.mouseX = e.clientX;
      state.mouseY = e.clientY;
      const px = (state.mouseX - state.rect.left) / state.rect.width;
      const py = (state.mouseY - state.rect.top) / state.rect.height;

      el.style.setProperty('--px', px);
      el.style.setProperty('--py', py);
    };

    el.addEventListener('mousemove', handleMouseMove);

    return () => {
      el.removeEventListener('mousemove', handleMouseMove);
    };
  }, [active]);

  return ref;
}

const initialState = {
  slideIndex: 0,
};

const slidesReducer = (state, event) => {
  if (event.type === 'NEXT') {
    return {
      ...state,
      slideIndex:
        state.slideIndex === 0 ? slides.length - 1 : state.slideIndex - 1,
    };
  }
  if (event.type === 'PREV') {
    return {
      ...state,
      slideIndex: (state.slideIndex + 1) % slides.length,
    };
  }
};

// eslint-disable-next-line react/prop-types
function Slide({ slide, offset }) {
  const active = offset === 0 ? true : null;
  const ref = useTilt(active);

  return (
    <div
      ref={ref}
      className="slide"
      data-active={active}
      style={{
        '--offset': offset,
        // eslint-disable-next-line no-nested-ternary
        '--dir': offset === 0 ? 0 : offset > 0 ? 1 : -1,
      }}
    >
      <div
        className="slideBackground"
        style={{
          // eslint-disable-next-line react/prop-types
          backgroundImage: `url('${slide.image}')`,
        }}
      />
      <div
        className="slideContent"
        style={{
          // eslint-disable-next-line react/prop-types
          backgroundImage: `url('${slide.image}')`,
        }}
      >
        <div className="slideContentInner">
          {/* eslint-disable-next-line react/prop-types */}
          <h2 className="slideTitle">{slide.title}</h2>
          {/* eslint-disable-next-line react/prop-types */}
          <h3 className="slideSubtitle">{slide.subtitle}</h3>
          {/* eslint-disable-next-line react/prop-types */}
          <p className="slideDescription">{slide.description}</p>
        </div>
      </div>
    </div>
  );
}

function Carrusel() {
  const [state, dispatch] = React.useReducer(slidesReducer, initialState);

  return (
    <div className="slides">
      <button type="button" onClick={() => dispatch({ type: 'PREV' })}>‹</button>
      {[...slides, ...slides, ...slides].map((slide, i) => {
        const offset = slides.length + (state.slideIndex - i);
        // eslint-disable-next-line react/no-array-index-key
        return <Slide slide={slide} offset={offset} key={i} />;
      })}
      <button type="button" onClick={() => dispatch({ type: 'NEXT' })}>›</button>
    </div>
  );
}

export default Carrusel;
