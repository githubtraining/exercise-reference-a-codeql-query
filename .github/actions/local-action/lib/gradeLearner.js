const yaml = require("js-yaml");
const fs = require("fs");
const hasValidInputs = require("./validateInputs");

module.exports = async () => {
  const codeQLWorkflowFile = fs.readFileSync(
    `${process.env.GITHUB_WORKSPACE}/.github/workflows/codeQL.yml`,
    "utf8"
  );
  const parsedCodeQLWorkflow = yaml.load(codeQLWorkflowFile);
  const validConfigStatus = hasValidInputs(parsedCodeQLWorkflow);

  try {
    //   Do some logic to verify the leaner understands

    if (validConfigStatus.isValid) {
      return {
        reports: [
          {
            filename: "",
            isCorrect: true,
            display_type: "actions",
            level: "info",
            msg: "Great job!",
            error: {
              expected: "",
              got: "",
            },
          },
        ],
      };
      // BAD-RESULT
    } else {
      return {
        reports: [
          {
            filename: "",
            isCorrect: false,
            display_type: "actions",
            level: "warning",
            msg: `incorrect solution`,
            error: {
              expected:
                "The config file located in the .github/codeql directory to be used as input to the CodeQL-Build job step named 'Initialize CodeQL'",
              got: `${validConfigStatus.message}`,
            },
          },
        ],
      };
    }
  } catch (error) {
    return {
      reports: [
        {
          filename: "",
          isCorrect: false,
          display_type: "actions",
          level: "fatal",
          msg: "",
          error: {
            expected: "",
            got: "An internal error occurred.  Please open an issue at: https://github.com/githubtraining/exercise-reference-a-codeql-query and let us know!  Thank you",
          },
        },
      ],
    };
  }
};
