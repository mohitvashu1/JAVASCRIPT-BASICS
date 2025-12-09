console.log("Start of asynchronous script.");

// This operation is asynchronous.
// It is handed off to the browser/runtime and continues immediately.
setTimeout(() => {
  console.log("This message appears after 2 seconds (asynchronously).");
}, 2000);

// The program does not wait for the setTimeout.
// This line executes immediately, while the timer is still running in the background.
console.log("This runs immediately, not waiting for the timer.");

// Output:
// Start of asynchronous script.
// This runs immediately, not waiting for the timer.
// This message appears after 2 seconds (asynchronously).