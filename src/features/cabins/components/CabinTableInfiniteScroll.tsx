import { useInfiniteQuery } from "@tanstack/react-query";
import { useEffect, useRef } from "react";
import { FaPlus } from "react-icons/fa";
import { useSearchParams } from "react-router-dom";
import { Spinner } from "../../../components/Spinner";
import Modal from "../../../layouts/Modal";
import { getCabinsPage } from "../../../services/apiCabins";
import { useCabinsStore } from "../store/useCabinsStore";
import CabinRow from "./CabinRow";
import styles from "./CabinTableInfiniteScroll.module.css";
import UpdateCabinForm from "./UpdateCabinForm";

const PAGE_SIZE = 5;

export default function CabinTablePaginated() {
  const { setShowOpenModal, showOpenModal, editingCabinId, setEditingCabinId } = useCabinsStore();
  const [searchParams] = useSearchParams();
  const sortBy = searchParams.get("sortBy") ?? "name-asc";
  const { data, isLoading, isError, fetchNextPage, hasNextPage, isFetchingNextPage } = useInfiniteQuery({
    queryKey: ["cabins-paginated", sortBy],
    queryFn: ({ pageParam }) => getCabinsPage(pageParam, sortBy),
    initialPageParam: 0,
    getNextPageParam: (lastPage, allPages) =>
      lastPage.length < PAGE_SIZE ? undefined : allPages.length * PAGE_SIZE,
  });
  const sentinelRef = useRef<HTMLDivElement | null>(null);
  const bodyRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasNextPage && !isFetchingNextPage) {
          fetchNextPage();
        }
      },
      { root: bodyRef.current, rootMargin: "200px" },
    );
    if (sentinelRef.current) observer.observe(sentinelRef.current);
    return () => observer.disconnect();
  }, [hasNextPage, isFetchingNextPage, fetchNextPage]);

  const cabins = data?.pages.flat() ?? [];
  const editingCabin = cabins.find((cabin) => cabin.id === editingCabinId);

  if (isError && !isLoading) return <p>error while fetching the data</p>;
  if (isLoading) return <Spinner />;

  return (
    <div className={styles.table}>
      <header className={styles.header}>
        <div>Image</div>
        <div>Cabin</div>
        <div>Description</div>
        <div>Price</div>
        <div>Discount</div>
        <div>maxCapacity</div>
        <div className={styles.addButton}>
          <button
            className={styles.button}
            onClick={() => {
              setShowOpenModal();
              setEditingCabinId(null);
            }}
          >
            <FaPlus /> {!showOpenModal ? "Add" : "close"}
          </button>
        </div>
      </header>
      <div className={styles.body} ref={bodyRef}>
        {cabins.map((cabin) => (
          <CabinRow key={cabin.id} cabin={cabin} />
        ))}
        <div ref={sentinelRef} />
        {isFetchingNextPage && <Spinner />}
      </div>
      {editingCabin && (
        <Modal>
          <UpdateCabinForm cabin={editingCabin} />
        </Modal>
      )}
    </div>
  );
}
