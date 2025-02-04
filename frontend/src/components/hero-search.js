"use client";

import Image from "next/image";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

const HeroSearchField = ({ searchQuery, setSearchQuery, handleSubmit }) => {
  return (
    <form
      onSubmit={handleSubmit}
      className="mt-8 w-full max-w-lg flex items-center flex-col md:flex-row gap-4 px-10 md:px-0"
    >
      <div className="relative flex-grow w-full">
        <Input
          type="search"
          placeholder="What do you want to search?"
          className="rounded-full pl-4 pr-10 py-2 w-full"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          required
        />
        <Image
          src="/icons/search.svg"
          width={20}
          height={20}
          alt="search icon"
          className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none"
        />
      </div>
      <Button
        type="submit"
        className="rounded-full px-8 bg-[#3300FF] hover:bg-[#3300FF]/90 text-white w-full md:w-auto"
      >
        Search
      </Button>
    </form>
  );
};

export default HeroSearchField;
