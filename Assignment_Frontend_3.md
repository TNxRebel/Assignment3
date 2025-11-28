## 📝 FE Assignment3 (React): Todo List with Filters


### 🎯 **Objective**

The objective of this assignment is to build a functional React Todo List application that demonstrates your ability to manage component state, handle user input, update and filter lists dynamically, and render components conditionally.

Through this exercise, you will practice:

- Managing and updating state with React Hooks (`useState`)
- Handling user interactions (adding, toggling, deleting items)
- Using array methods (`map`, `filter`) to manipulate and display data
- Implementing UI controls to filter visible data based on application state
- Structuring a React app into reusable components and passing data via props

---

Build an interactive **Todo List** application using React.

Users should be able to:

- Add new tasks
- Mark tasks as complete/incomplete
- Delete tasks
- Filter the list to show **All**, **Active**, or **Completed** todos

### 📋 **Requirements**

### 1. **Add Tasks**

- Provide an input box and “Add” button.
- When the user types text and clicks “Add”, a new todo appears in the list.
- Empty inputs should be ignored.

### 2. **Toggle Completion**

- Each todo should have a checkbox (or similar control).
- When checked, it marks the todo as completed.
- Completed tasks should appear with a visual difference (e.g. strikethrough or gray color).

### 3. **Delete Tasks**

- Each todo should have a “Delete” button to remove it from the list.

### 4. **Filters**

Add three buttons:

- **All** → shows all todos
- **Active** → shows only incomplete todos
- **Completed** → shows only completed todos

💡 Use `.filter()` on the todos array to determine which ones to render.

---

### **Bonus Challenges (Optional)**

- Save the todo list in `localStorage` so it persists on page refresh.
- Load from storage when the app starts.
- Add keyboard support: pressing Enter adds a task.

---

[Funny Bones](https://www.notion.so/Funny-Bones-2951127e595e80799910db025e9083e3?pvs=21)

## BE Assignment2: GitHub Repo Info Fetcher

### 🎯 Objective

Build a **command-line tool** that accepts one or more GitHub repository URLs, fetches repository metadata asynchronously using the GitHub API, and displays a summary for each repository in the console.

---

### 📋 Requirements

### 1. Input Handling

- The program should accept multiple GitHub repo URLs as command-line arguments, for example:

```bash
node repoFetcher.js <https://github.com/nodejs/node> <https://github.com/facebook/react>

```

- Validate the URLs to ensure they follow the GitHub repo pattern `https://github.com/:owner/:repo`.
- If any URL is invalid, print an error message and skip it.

### 2. Fetch Repository Info

- For each valid repo URL, fetch the repository metadata from the GitHub API:
`https://api.github.com/repos/:owner/:repo`
- Use Node's built-in `https` module or `fetch` (if your Node version supports it).

### 3. Display Information

For each repo, display the following details:

- **Full Name** (e.g., `nodejs/node`)
- **Description**
- **Stars count**
- **Forks count**
- **Open Issues count**
- **Repository URL**

Format the output clearly, for example:

```
Repository: nodejs/node
Description: Node.js JavaScript runtime
Stars: 100000
Forks: 25000
Open Issues: 900
URL: <https://github.com/nodejs/node>
---------------------------------------

```

---

### 4. Bonus (Optional)

- If a repo is not found (e.g., 404), print a friendly error message.
- If the request fails (network error, rate limit), print an error and continue with the other repos.
- Add a progress indicator for fetching repos.

---

### 🧰 Technical Notes

- Use asynchronous code (`async/await` or Promises).
- Use only Node built-in modules or standard APIs (no external libraries).

### ❤️ Happy Coding!
