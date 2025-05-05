// components/OtherToursSidebar.tsx
import Image from "next/image";
import { Tour } from "@/types";

interface OtherToursSidebarProps {
  otherTours: Tour[];
}

const OtherToursSidebar: React.FC<OtherToursSidebarProps> = ({
  otherTours,
}) => {
  return (
    <div className="top-0 sticky">
      <h2 className="mb-6 font-semibold text-gray-900 text-2xl">Other Tours</h2>
      <div className="space-y-6">
        {otherTours.map((otherTour) => (
          <div key={otherTour.id} className="flex items-center gap-4">
            <Image
              src={otherTour.image.replace("..", "")}
              alt={otherTour.title}
              width={100}
              height={100}
              className="rounded-lg object-cover"
            />
            <div>
              <h3 className="font-medium text-gray-900 text-lg">
                {otherTour.title}
              </h3>
              <p className="text-gray-600 text-sm">{otherTour.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OtherToursSidebar;
