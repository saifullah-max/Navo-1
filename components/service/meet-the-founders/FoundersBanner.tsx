import Image from "next/image";

export const FoundersBanner = () => {
  return (
    <div
      style={{
        position: "relative",
        height: "90vh",
        width: "100%",
        backgroundColor: "#03336d",
      }}
    >
      <Image
        src="/meet-founders-banner.png"
        alt="Banner"
        fill
        style={{
          objectFit: "cover",
        }}
        priority
      />
    </div>
  );
};