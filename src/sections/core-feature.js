import { Container, Box } from 'theme-ui';
import TextFeature from '../components/text-feature';
import Image from '../components/image';
import shapePattern from '../assets/shape-pattern2.png';

// Replace with real images later
import ManufacturingImg from '../assets/manufacturing.png';
import HealthcareImg from '../assets/healthcare.png';
import EcommerceImg from '../assets/ecommerce.png';
import CallCenterImg from '../assets/callcenter.png';

const features = [
  {
    subTitle: 'Manufacturing',
    title: 'World-Class Manufacturing & Textiles',
    description:
      'Our manufacturing and textile divisions deliver high-quality products trusted by global markets. We combine innovation with sustainability to drive growth across industries.',
    img: ManufacturingImg,
  },
  {
    subTitle: 'Healthcare',
    title: 'Healthcare & Dental Excellence',
    description:
      'With facilities like Cromwell Dental Place in the UK, we provide outstanding healthcare services focused on patient care, advanced treatments, and global standards.',
    img: HealthcareImg,
  },
  {
    subTitle: 'E-Commerce',
    title: 'Expanding E-Commerce Solutions',
    description:
      'Our e-commerce ventures make global shopping easier, connecting products, businesses, and customers with reliable platforms and services.',
    img: EcommerceImg,
  },
  {
    subTitle: 'Call Center & BPO',
    title: 'Customer Support & Outsourcing',
    description:
      'We operate call centers and BPO services that provide multilingual support, customer engagement, and outsourcing solutions to international clients.',
    img: CallCenterImg,
  },
];

export default function CoreFeature() {
  return (
    <Box as="section" sx={{ variant: 'section.coreFeature' }}>
      {features.map((feature, index) => (
        <Container sx={styles.containerBox} key={index}>
          <Box sx={styles.contentBox}>
            <TextFeature
              subTitle={feature.subTitle}
              title={feature.title}
              description={feature.description}
            />
          </Box>
          <Box sx={styles.thumbnail}>
            <Image src={feature.img} alt={feature.subTitle} />
            <Box sx={styles.shapeBox}>
              <Image src={shapePattern} alt="Shape" />
            </Box>
          </Box>
        </Container>
      ))}
    </Box>
  );
}

const styles = {
  containerBox: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: ['wrap', null, null, 'nowrap'],
    pb: [5, 7],
  },
  contentBox: {
    flexShrink: 0,
    px: [0, null, '30px', 0],
    textAlign: ['center', null, null, 'left'],
    width: ['100%', '80%', null, 340, 400, 430, null, 485],
    pb: ['40px', '60px', null, 0],
    mx: ['auto', null, null, 0],
    '.description': {
      pr: [0, null, 6, 7, 6],
    },
  },
  thumbnail: {
    display: 'inline-flex',
    position: 'relative',
    mr: 'auto',
    ml: ['auto', null, null, null, 7],
    '> img': {
      position: 'relative',
      zIndex: 1,
      height: [280, 'auto'],
    },
  },
  shapeBox: {
    position: 'absolute',
    bottom: -50,
    right: -120,
    zIndex: -1,
    display: ['none', 'inline-block'],
  },
};


