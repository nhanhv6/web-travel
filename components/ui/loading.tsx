// components/Loading.tsx
export default function Loading() {
    return (
      <div className="z-[9999] fixed inset-0 flex justify-center items-center bg-black bg-opacity-60">
        <div className="border-4 border-white border-t-transparent rounded-full w-12 h-12 animate-spin" />
      </div>
    );
  }
  