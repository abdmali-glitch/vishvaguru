import React from 'react';
import { Container, Box, Heading, Text, Button } from 'theme-ui';
import { FaIndustry, FaHospital, FaShoppingCart, FaHeadset } from 'react-icons/fa';

const features = [
  {
    id: 'manufacturing',
    title: 'Manufacturing',
    subtitle: 'World-Class Manufacturing & Textiles',
    description:
      'Our manufacturing and textile divisions deliver high-quality products to global markets. We combine innovation with sustainability to drive growth across industries.',
    icon: <FaIndustry size={64} />,
    cta: '#manufacturing',
  },
  {
    id: 'healthcare',
    title: 'Healthcare & Dental',
    subtitle: 'Clinical Excellence & Patient Care',
    description:
      'Home to Cromwell Dental Place in the UK and other healthcare initiatives, we deliver clinical excellence and compassionate patient care using modern standards and technologies.',
    icon: <FaHospital size={64} />,
    cta: '#healthcare',
  },
  {
    id: 'ecommerce',
    title: 'E-Commerce',
    subtitle: 'Global E-Commerce Solutions',
    description:
      'Our e-commerce platforms connect products to customers across borders, backed by reliable logistics and customer-first operations.',
    icon: <FaShoppingCart size={64} />,
    cta: '#ecommerce',
  },
  {
    id: 'callcenter',
    title: 'Call Center & BPO',
    subtitle: 'Customer Support & Outsourcing',
    description:
      'We operate multilingual contact centers and BPO services providing customer engagement, technical support, and outsourcing for international clients.',
    icon: <FaHeadset size={64} />,
    cta: '#callcenter',
  },
];

export default function CoreFeature() {
  return (
    <Box as="section" sx={{ variant: 'section.coreFeature', py: [4, 5, 6] }}>
      {features.map((f, idx) => (
        <Container key={f.id} sx={styles.container}>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexDirection: ['column', idx % 2 === 0 ? 'row' : 'row-reverse'],
              width: '100%',
            }}
          >
            {/* Icon column */}
            <Box sx={styles.iconBox}>{f.icon}</Box>

            {/* Text column */}
            <Box sx={styles.contentBox}>
              <Text sx={styles.subTitle}>{f.title}</Text>
              <Heading as="h3" sx={styles.title}>
                {f.subtitle}
              </Heading>
              <Text as="p" sx={styles.description}>
                {f.description}
              </Text>
              <Button as="a" href={f.cta} variant="primary" sx={{ mt: 3 }}>
                Learn more
              </Button>
            </Box>
          </Box>
        </Container>
      ))}
    </Box>
  );
}

const styles = {
  container: {
    px: [3, 4, 5],
    py: [4, 5],
    maxWidth: 1200,
    width: '100%',
  },
  iconBox: {
    width: ['100%', '40%'],
    textAlign: 'center',
    fontSize: [64, 80], // icon size scales with screen
    color: 'primary',
    mb: [3, 0],
  },
  contentBox: {
    width: ['100%', '55%'],
    textAlign: ['center', 'left'],
    px: [0, 3],
    py: [3, 0],
  },
  subTitle: {
    fontSize: 1,
    fontWeight: 700,
    color: 'primary',
    mb: 2,
    textTransform: 'uppercase',
    letterSpacing: '0.08em',
  },
  title: {
    fontSize: [3, 4],
    mb: 3,
  },
  description: {
    fontSize: 2,
    lineHeight: 1.8,
    color: 'text',
  },
};



