import { useEffect, useState } from "react";
import logo from "./assets/logo.png"; // Importing an image
import "./App.css"; // Importing a CSS file
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

function App() {
  const [users, setUsers] = useState([]);
  const API_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    fetch(`${API_URL}/api/pasien`)
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => console.error("Error:", err));
  }, []);
  const handleEdit = (user) => {
    console.log("Edit user:", user);
    // Bisa buka modal / redirect ke halaman edit
  };

  const handleDelete = (id) => {
    const confirmed = confirm("Yakin mau hapus?");
    if (!confirmed) return;

    fetch(`${API_URL}/api/pasien/hapus/${id}`, {
      method: "DELETE",
    })
      .then((res) => {
        if (!res.ok) throw new Error("Gagal hapus pasien");
        // Refresh data
        setUsers(users.filter((u) => u.id !== id));
      })
      .catch((err) => console.error("Error delete:", err));
  };

  return (
    <div>
      <Button>Halo Dunia</Button>
      Saya ngnga tau ini harus di kasih apa?

      <h2 className="text-3xl font-bold underline">User List</h2>
      <ul>
        {users.map((user) => (
          <li key={user.no_rm}>{user.nm_pasien}</li>
        ))}
      </ul>
      <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Invoice</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Method</TableHead>
            <TableHead className="text-right">Amount</TableHead>
            <TableHead>Aksi</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users.map((user) => (
            <TableRow key={user.no_rm}>
              <TableCell>{user.no_ktp}</TableCell>
              <TableCell>{user.tgl_lahir}</TableCell>
              <TableCell>{user.nm_pasien}</TableCell>
              <TableCell className="space-x-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleEdit(user)}
                >
                  Edit
                </Button>
                <Button
                  variant="destructive"
                  size="sm"
                  onClick={() => handleDelete(user.no_rm)}
                >
                  Hapus
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
export default App;
