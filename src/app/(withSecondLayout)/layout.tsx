export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      Layout2
      <div>{children}</div>
    </div>
  );
}
