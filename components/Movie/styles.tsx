import { styled } from '../../stitches.config';

const MovieWrap = styled('div', {
  display: 'flex',
  flexWrap: 'wrap',
  marginTop: 5,

  '.title': {
    fontStyle: 'italic',
    position: 'absolute',
    color: 'White',

    zIndex: 100,
    margin: 10,
    textShadow: '#000 1px 0 10px',
  },

  '.movie_container': {
    width: '250px',
    height: '150px',
    position: 'relative',
    marginRight: 10,
    marginBottom: 10,
    background: 'gray',
  },

  '.image-wrap': {
    position: 'relative',
    color: 'white',
    width: '100%',
    height: '100%',
  },
});

export { MovieWrap };
