export default function Loading() {
  return (
    <div className="z-[9999] fixed inset-0 flex flex-col justify-center items-center bg-black/60 backdrop-blur-sm">
      <div className="border-[6px] border-white border-t-transparent rounded-full w-14 h-14 animate-spin" />
      <p className="mt-4 text-white text-sm tracking-wider animate-pulse">
        Đang tải dữ liệu...
      </p>
    </div>
  );
}
