import Image from "next/image";

export default function ContactCard() {
  return (
    <div className="relative overflow-hidden rounded-md bg-gray-800 p-6 text-white">
      <div className="absolute inset-0 opacity-30">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Rectangle%2018-i5cy9EkrnJD18OH8XGXM8QNqx8WibZ.png"
          alt="Business consultation"
          fill
          className="object-cover"
        />
      </div>
      <div className="relative z-10">
        <h3 className="mb-2 text-2xl font-bold">Ready To Get Expert</h3>
        <h4 className="mb-6 text-2xl font-bold">Our Services</h4>
        <button className="rounded-md bg-green-500 px-6 py-2 text-white transition-colors hover:bg-green-600">
          Contact Us
        </button>
      </div>
    </div>
  );
}
