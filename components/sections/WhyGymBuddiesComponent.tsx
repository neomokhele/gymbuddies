import GymBuddiesBenefitComponent from "./GymBuddiesBenefitComponent";

const WhyGymBuddiesComponent = () => {
  return (
    <section id="#whyGymBuddies" className="flex flex-col px-6 md:px-16 mt-10 pb-3">
      <div className="flex flex-col items-center justify-center text-white gap-4 pb-10">
        <p className="text-md">Why GymBuddies?</p>
        <p className="text-2xl md:text-3xl font-bold text-center w-72 md:w-96">
          GymBuddies heal your body & mind to be creative
        </p>
      </div>

      <GymBuddiesBenefitComponent />
    </section>
  );
};

export default WhyGymBuddiesComponent;
