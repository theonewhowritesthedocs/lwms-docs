import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';

const FeatureList = [
  {
    title: 'Putaway',
    url: '/docs/apps/putaway',
    Svg: require('@site/static/img/putaway.svg').default,
    description: (
      <>
        Transfer stock from one warehouse to another.
      </>
    ),
  },
  {
    title: 'Transfer Request Designation',
    url: '/docs/apps/transfer_request_designation',
    Svg: require('@site/static/img/designation.svg').default,
    description: (
      <>
        Assign a transfer request to someone.
      </>
    ),
  },
  {
    title: 'Inspection',
    url: '/docs/apps/inspection',
    Svg: require('@site/static/img/inspection.svg').default,
    description: (
      <>
        Log the results of quality checks on a production order.
      </>
    ),
  },
  {
    title: 'Shipping Delivery',
    url: '/docs/apps/shipping_delivery',
    Svg: require('@site/static/img/delivery.svg').default,
    description: (
      <>
        Log the necessary information when delivering sales orders.
      </>
    ),
  },
  {
    title: 'Shipping Multi-Site Transfer',
    url: '/docs/apps/shipping_multi_site_transfer',
    Svg: require('@site/static/img/putaway.svg').default,
    description: (
      <>
        Log the necessary information when transfering stock.
      </>
    ),
  },
  {
    title: 'Receive',
    url: '/docs/apps/receive',
    Svg: require('@site/static/img/receive.svg').default,
    description: (
      <>
        Log the necessary information when receiving inventory.
      </>
    ),
  },
  {
    title: 'Truck CheckIn',
    url: '/docs/apps/truck_checkin',
    Svg: require('@site/static/img/checkin.svg').default,
    description: (
      <>
        Log the entrance of a truck and its reason.
      </>
    ),
  },
  {
    title: 'Truck CheckOut',
    url: '/docs/apps/truck_checkout',
    Svg: require('@site/static/img/checkout.svg').default,
    description: (
      <>
        Log the departure of a truck and its reason.
      </>
    ),
  },
  {
    title: 'Truck Inspect',
    url: '/docs/apps/truck_inspect',
    Svg: require('@site/static/img/truck-inspect.svg').default,
    description: (
      <>
        Log the results of quality checks on a truck.
      </>
    ),
  },
  {
    title: 'Reassign License Plate',
    url: '/docs/apps/reassign_lpn',
    Svg: require('@site/static/img/putaway.svg').default,
    description: (
      <>
        Assign and depalletize stock to and from LPNs.
      </>
    ),
  },
];

function Feature({ Svg, title, description, url }) {
  return (
    <Link className="feature" to={url}>
        <Svg className="feature-svg" />
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
    </Link>
  );
}

export default function HomepageFeatures() {
  return (
    <>
      <div className='features-label'><span>Shortcuts</span></div>
      <section className="features">
        {FeatureList.map((props, idx) => (
          <Feature key={idx} {...props} />
        ))}
      </section>
    </>
  );
}
