s3cmd sync --acl-public --exclude '*.*' --include '*.png' --include '*.jpg' --include '*.html' --add-header="Cache-Control: max-age=600" . s3://kbotb.org/
