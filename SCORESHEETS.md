How I fixed the scoresheets in 2017:

rm -f output/*.pdf; for f in $(cd orig; ls -1); do rm -f *.pdf && convert -rotate 180 -trim  -density 200 -grayscale rec709luma orig/$f -colorspace gray -depth 8  -quality 50  -compress jpeg cv-%04d.pdf && gs -sDEVICE=pdfwrite -dCompatibilityLevel=1.4 -dDownsampleColorImages=true -dColorImageResolution=150 -dNOPAUSE  -dBATCH -sOutputFile=output/$f *.pdf || break; ls -lh output/$f; done

The convert does the rotation (all of the originals were upside-down), then the gs combines them and writes out a decent-sized result.
