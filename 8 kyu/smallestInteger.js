const findSmallest = (args) => {
  args = args.sort((a, b) => a - b);
  return args[0];
};

console.log(findSmallest([34, 15, 88, 2]));
