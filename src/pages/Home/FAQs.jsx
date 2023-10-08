/* eslint-disable react/no-unescaped-entities */
const FAQs = () => {
  return (
    <div className="mb-24">
      <h1 className="text-4xl font-semibold text-center mb-6 text-blue-700">
        FAQ's
      </h1>
      {/* description */}
      <div className="flex flex-col justify-center items-center mb-8">
        <h2 className="text-2xl font-semibold mb-2">
          Have Questions? We Have Answers. Explore Our FAQs Below.
        </h2>
        <p className="w-[750px] text-gray-500 text-lg font-medium text-center">
          Uncover insights about <span className="text-blue-700 font-semibold">Launch<span className="text-yellow-700">Masters</span> </span> and how we excel in orchestrating
          successful product launch events. From planning to analysis, we're
          here to guide you every step of the way.
        </p>
      </div>

      {/* QA */}
      <div className="space-y-4">
        <div className="collapse collapse-arrow bg-slate-300">
          <input type="radio" name="my-accordion-2" checked="checked" />
          <div className="collapse-title text-xl  font-medium">
            How does LaunchMasters ensure the success of product launch events?
          </div>
          <div className="collapse-content text-bg text-gray-700">
            <p>
              LaunchMasters employs a comprehensive approach, offering services
              such as event planning, media management, branding, and post-event
              analysis. Our experienced team is dedicated to delivering
              impactful and successful product launches.
            </p>
          </div>
        </div>

        <div className="collapse collapse-arrow bg-slate-300">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl  font-medium">
            What types of events does LaunchMasters specialize in?
          </div>
          <div className="collapse-content text-bg text-gray-700">
            <p>
              LaunchMasters specializes in corporate events, specifically
              focusing on product launches. Our expertise extends to planning
              and executing events that showcase your products or services
              effectively.
            </p>
          </div>
        </div>

        <div className="collapse collapse-arrow bg-slate-300">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">
            Can LaunchMasters handle both small and large-scale product launch
            events?
          </div>
          <div className="collapse-content text-bg text-gray-700">
            <p>
              Absolutely! LaunchMasters is equipped to manage events of various
              scales. Whether it's an intimate product unveiling or a grand
              launch event, our team tailors its services to meet your specific
              needs.
            </p>
          </div>
        </div>

        <div className="collapse collapse-arrow bg-slate-300">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">
            How do I get started with LaunchMasters for my product launch event?
          </div>
          <div className="collapse-content">
            <p>
              Getting started is easy! Simply visit our "Services" page to
              explore the range of offerings. Once you've identified the
              services that suit your needs, you can contact us through the
              provided channels for a consultation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQs;
