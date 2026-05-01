"use client";
import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface User { id: number; name: string; email: string; company: { name: string } }

export default function ApiDataDisplay() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users?_limit=6")
      .then(res => res.json())
      .then(data => { setUsers(data); setLoading(false); })
      .catch(() => setLoading(false));
  }, []);

  if (loading) return <p className="text-center py-4">Loading data...</p>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {users.map(u => (
        <Card key={u.id}>
          <CardHeader><CardTitle>{u.name}</CardTitle></CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">{u.email}</p>
            <p className="text-sm text-muted-foreground">{u.company.name}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}