export default function LoadingSpinner() {
  return (
    <div className="flex min-h-screen w-full items-center justify-center">
      <div
        style={{ borderTopColor: 'transparent' }}
        className="h-8 w-8 animate-spin rounded-full border-2 border-blue-800 dark:border-blue-300"
      ></div>
      <p className="ml-2">Loading...</p>
    </div>
  );
}
