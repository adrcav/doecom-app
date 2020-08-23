import React from 'react';
import ContentLoader from 'react-content-loader';

import { Container } from './styles';
import VerifiedBadge from '../VerifiedBadge';

const CauseCard = ({ data, loading = false }) => (
  <Container image={data ? data.image : ''} style={{ backgroundColor: (loading ? 'transparent' : '') }}>
    {loading ? (
      <ContentLoader
        speed={2}
        width="100%"
        height="100%"
        viewBox="0 0 100% 100%"
        backgroundColor="#eaeced"
        foregroundColor="#f5f5f5"
        style={{ position: 'absolute', top: 0 }}
      >
        <rect x="0" y="0" rx="4" ry="4" width="100%" height="100%" />
      </ContentLoader>
    ) : (
      <div className="cause-data">
        <div className="cause-avatar" style={{ backgroundImage: `url('${data.avatar}')` }}></div>
        <p className="cause-name">
          {data.name}
          {data.confirmed && (
            <VerifiedBadge />
          )}
        </p>
      </div>
    )}
  </Container>
);

export default CauseCard;
