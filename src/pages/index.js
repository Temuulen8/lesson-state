import Input from "@/components/input";

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <h1 className="text-5xl text-gray-950">User find application </h1>
      <div className="flex flex-col gap-5 mt-6">
        <Input />
        List
      </div>
    </main>
  );
}
