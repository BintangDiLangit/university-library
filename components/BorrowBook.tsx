"use client";
import React, { useState } from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { toast } from "@/hooks/use-toast";
import { borrowBook } from "@/lib/actions/book";

interface Props {
  userId: string;
  bookId: string;
  borrowingEligibility: {
    isEligible: boolean;
    message: string;
  };
}

const BorrowBook = ({
  userId,
  bookId,
  borrowingEligibility: { isEligible, message },
}: Props) => {
  const router = useRouter();
  const [borrowing, setBorrowing] = useState(false);
  const handleBorrow = async () => {
    if (!isEligible) {
      toast({
        title: "Borrowing Error",
        description: message,
        variant: "destructive",
      });
    }

    setBorrowing(true);
    try {
      const result = await borrowBook({ bookId, userId });

      if (result.success) {
        toast({
          title: "Borrowed Successfully",
          description: result.message,
        });
        router.push("/");
      } else {
        toast({
          title: "Borrowing Error",
          description: result.message,
          variant: "destructive",
        });
      }
    } catch (error) {
      console.log(error);

      toast({
        title: "Borrowing Error",
        description: "An error occurred while borrowing the book",
        variant: "destructive",
      });
    } finally {
      setBorrowing(false);
    }
  };
  return (
    <Button
      className="book-overview_btn"
      onClick={handleBorrow}
      disabled={borrowing}
    >
      <Image src="/icons/book.svg" alt="book" width={20} height={20} />
      <p className="font-bebas-neue text-xl text-dark-100">
        {borrowing ? "Borrowing..." : "Borrow Book"}
      </p>
    </Button>
  );
};

export default BorrowBook;
