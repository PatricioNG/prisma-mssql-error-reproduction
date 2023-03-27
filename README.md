Error reproduction for Prisma team for bug report, steps to reproduce:
---
1. Spin up a MSSQL server instance, push migration up to create a user table
2. Add in some default values to the table
3. Test on 4.11.0 by running `npm run dev` notice the console output and invalid @P2 for the second query
4. Install 4.10.1 and test again, notice both queries return results without issue.