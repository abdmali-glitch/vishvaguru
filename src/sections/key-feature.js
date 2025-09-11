import { Box, Container, Grid } from 'theme-ui';
import SectionHeader from '../components/section-header';
import FeatureCardColumn from 'components/feature-card-column.js';
import { FaGlobe, FaChartLine, FaLeaf, FaHandshake } from 'react-icons/fa';

const data = [
  {
    id: 1,
    icon: <FaGlobe size={48} />,
    altText: 'Global Presence',
    title: 'Global Presence',
    text:
      'Operations across multiple countries with businesses in healthcare, textiles, e-commerce, and more — connecting opportunities worldwide.',
  },
  {
    id: 2,
    icon: <FaChartLine size={48} />,
    altText: 'Sustainable Growth',
    title: 'Sustainable Growth',
    text:
      'A strong track record of long-term value creation, with a focus on scalable and future-ready businesses that attract global investors.',
  },
  {
    id: 3,
    icon: <FaLeaf size={48} />,
    altText: 'Innovation & Responsibility',
    title: 'Innovation & Responsibility',
    text:
      'We combine innovation with social and environmental responsibility, ensuring our ventures positively impact communities and industries.',
  },
  {
    id: 4,
    icon: <FaHandshake size={48} />,
    altText: 'Trusted Partnerships',
    title: 'Trusted Partnerships',
    text:
      'Building strong alliances with global partners, investors, and teams, fostering trust and collaboration across industries.',
  },
];

export default function KeyFeature() {
  return (
    <Box sx={{ variant: 'section.keyFeature' }} id="feature">
      <Container>
        <SectionHeader
          slogan="Why Choose Vishvaguru Global Enterprises"
          title="A trusted partner for growth, innovation, and global impact"
        />

        <Grid sx={styles.grid}>
          {data.map((item) => (
            <FeatureCardColumn
              key={item.id}
              src={null} // remove image prop since we’re using icons
              alt={item.altText}
              title={item.title}
              text={item.text}
              icon={item.icon} // pass icons instead
            />
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

const styles = {
  grid: {
    width: ['100%', '80%', '100%'],
    mx: 'auto',
    gridGap: [
      '35px 0',
      null,
      '40px 40px',
      '50px 60px',
      '30px',
      '50px 40px',
      '55px 90px',
    ],
    gridTemplateColumns: [
      'repeat(1,1fr)',
      null,
      'repeat(2,1fr)',
      null,
      'repeat(4,1fr)',
    ],
  },
};

