import styled from 'styled-components';
import PropTypes from 'prop-types';

const Container = ({ children, as, className, breakpoints }) => {
  if (!children) return null;

  const ContainerBox = styled.div`
    position: relative;
    width: calc(100% - 4rem);
    height: 100%;
    margin: 0 auto;
    padding: 0 2rem;

    ${breakpoints.map(
      (bp) => `@media(min-width: ${bp}px) { max-width: ${bp}px; }`
    )}
  `;

  return (
    <ContainerBox as={as} className={className}>
      {children}
    </ContainerBox>
  );
};

export default Container;

Container.propTypes = {
  children: PropTypes.node.isRequired,
  as: PropTypes.string,
  className: PropTypes.string,
  breakpoints: PropTypes.array,
};

Container.defaultProps = {
  as: null,
  className: null,
  breakpoints: [640, 768, 1024, 1280],
};
