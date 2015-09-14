# version-script
bash and node scripts to update core dependency versions

##How to run
create a 'directories.txt' that has the list of project directories to update.
In command line run `./updatePortal.sh arg1 arg2` where:
-arg1 is the file path to the directories
-arg2 is the desired version number

You need to download hub for this script to work: https://github.com/github/hub
This is a github wrapper for the git command, used in this case to open a PR from CL.
