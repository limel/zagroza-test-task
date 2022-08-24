import { lazy, Suspense } from 'react';
import Header from 'components/Header';
import Hero from 'components/Hero';

const Advantages = lazy(() =>
  import('./components/Advantages' /* webpackChunkName: "Advantages" */),
);
const CTA = lazy(() =>
  import('./components/CTA' /* webpackChunkName: "CTA" */),
);
const CallbackForm = lazy(() =>
  import('./components/CallbackForm' /* webpackChunkName: "CallbackForm" */),
);
const Footer = lazy(() =>
  import('./components/Footer' /* webpackChunkName: "Footer" */),
);

function App() {
  return (
    <Suspense fallback={'loading'}>
      <Header />
      <Hero />
      <Advantages />
      <CTA />
      <CallbackForm />
      <Footer />
    </Suspense>
  );
}

export default App;
