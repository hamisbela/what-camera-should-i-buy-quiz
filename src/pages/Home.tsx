import React from 'react';
import Quiz from '../components/Quiz';

export default function Home() {
  return (
    <div>
      <section className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-8">What Camera Should I Buy? - Quiz</h1>
        <Quiz />
      </section>

      <section id="guide" className="max-w-4xl mx-auto px-4 py-12">
        <div className="prose lg:prose-lg mx-auto space-y-8">
          <div className="mb-8">
            <p className="text-lg">
              If you're wondering, <strong>"What camera should I buy?"</strong>, you're not alone! Choosing the perfect camera can be overwhelming with so many options available. From DSLRs to mirrorless cameras, sensor sizes to lens systems, finding the best camera for your needs requires careful consideration. But don't worry – we've got you covered! Our interactive <strong>What Camera Should I Buy? Quiz</strong> will help you narrow down your choices and find the ideal camera for your photography journey.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Take the "What Camera Should I Buy?" Quiz?</h2>
            <p>
              With countless cameras on the market, deciding on the right one can feel overwhelming. Whether you're an aspiring photographer, a hobbyist, or a professional, our <strong>What Camera Should I Buy? Quiz</strong> is designed to match you with a camera that fits your style, budget, and photography goals.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Key Features Our Quiz Considers</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Camera Type:</strong> DSLR, mirrorless, or point-and-shoot – find what suits you best.</li>
              <li><strong>Sensor Size:</strong> Full-frame, APS-C, or Micro Four Thirds for your needs.</li>
              <li><strong>Usage:</strong> Portrait, landscape, street, or action photography.</li>
              <li><strong>Budget:</strong> Find the perfect camera within your price range.</li>
              <li><strong>Experience Level:</strong> From beginner-friendly to professional gear.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Popular Camera Categories</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Best for Beginners:</strong> User-friendly cameras with automatic modes.</li>
              <li><strong>Best for Professionals:</strong> High-end cameras with advanced features.</li>
              <li><strong>Best for Travel:</strong> Lightweight and versatile options.</li>
              <li><strong>Best for Video:</strong> Hybrid cameras with excellent video capabilities.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How the "What Camera Should I Buy?" Quiz Works</h2>
            <p>
              Taking our quiz is quick and easy! Simply answer a few questions about your photography interests, preferred features, and budget, and we'll recommend the best cameras for you. Our recommendations are based on extensive research and real-world testing.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Expert Camera Buying Tips</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Consider the Ecosystem:</strong> Think about lens availability and accessories.</li>
              <li><strong>Future-Proofing:</strong> Choose a camera that can grow with your skills.</li>
              <li><strong>Handling:</strong> Ensure the camera feels comfortable in your hands.</li>
              <li><strong>Support:</strong> Look for brands with good customer service and warranty.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Trust Our Camera Recommendations?</h2>
            <p>
              Our team consists of professional photographers and camera experts who stay up-to-date with the latest technology. We regularly update our <strong>What Camera Should I Buy? Quiz</strong> to include new models and features, ensuring you get the most current recommendations.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Find Your Perfect Camera?</h2>
            <p>
              Don't waste hours researching – let our <strong>What Camera Should I Buy? Quiz</strong> guide you to the perfect camera. Whether you're buying your first camera or upgrading your gear, we'll help you make an informed decision.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}