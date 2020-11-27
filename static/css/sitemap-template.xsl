<?xml version="1.0"?>

<xsl:stylesheet version="2.0"
		xmlns:html="http://www.w3.org/TR/REC-html40"
		xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
		xmlns:sitemap="http://www.sitemaps.org/schemas/sitemap/0.9"
		xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
> 
<xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>
<xsl:template match="/">

<html xmlns="http://www.w3.org/1999/xhtml">
    <head>
        <title>XML Sitemap</title>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
		<link rel="stylesheet" href="/static/css/sitemap.css"/>
		    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Lato:100,300,400,700,900"/>
    </head>
    <body>
	<div class="fixed-background"></div>
	<h2>Waldman.co Sitemap</h2>
    <table id="sitemap" cellpadding="3">
		<thead>
			<tr>
				<th width="80%">Urls</th>
				<th width="10%">Priority</th>
				<th width="10%">Images</th>
			</tr>
		</thead>
		<tbody>
			<xsl:for-each select="sitemap:urlset/sitemap:url">
				<xsl:variable name="sitemapUrl">
					<xsl:value-of select="sitemap:loc"/>
				</xsl:variable>
				<tr>
					<xsl:choose>
						<xsl:when test="image:image != ''">
							<td>
								<details>
									<summary><xsl:value-of select="sitemap:loc"/> <a href="{$sitemapUrl}" target="_blank" title="Visit site">
										<img src="/static/images/icons/external-link-alt-solid.svg" width="15" height="15"/>
									</a></summary>
									<div class="indent">
										<div class="indent">
											<label>Images: </label>
											<div class="indent">
												<xsl:for-each select="image:image">
													<xsl:variable name="imageUrl">
														<xsl:value-of select="image:loc"/>
													</xsl:variable>
													<xsl:variable name="imageCap">
														<xsl:value-of select="image:caption"/>
													</xsl:variable>
													<details>
														<summary><xsl:value-of select="image:title"/></summary>
														<div class="indent">
															<div class='img-url-container'>
																<label for="{$imageUrl}">Url: </label>
																<a id="{$imageUrl}" href="{$imageUrl}" target="_blank" class='img-url'>
																	<xsl:value-of select="image:loc"/>
																</a>
															</div>
															<div>
																<label for="{$imageCap}">Caption:</label>
																<span id="{$imageCap}">
																	<xsl:value-of select="image:caption"/>
																</span>
															</div>
														</div>
													</details>
												</xsl:for-each>
											</div>
										</div>
									</div>
								</details>
							</td>
							<td>
								<span><xsl:value-of select="sitemap:priority"/></span>
							</td>
							<td>
								<xsl:value-of select="count(image:image)"/>
							</td>
						</xsl:when>
						<xsl:otherwise>
							<td>
								<span class="imageless"><xsl:value-of select="sitemap:loc"/></span>
								<a href="{$sitemapUrl}" target="_blank" title="Visit site">
									<img src="/static/images/icons/external-link-alt-solid.svg" width="15" height="15"/>
								</a>
							</td>
							<td>
								<span><xsl:value-of select="sitemap:priority"/></span>
							</td>
							<td>0</td>
						</xsl:otherwise>
					</xsl:choose>
				</tr>	
			</xsl:for-each>
			<xsl:for-each select="sitemap:urlset/sitemap:url">
      		</xsl:for-each>
		</tbody>
	</table>
  </body>
  </html>
</xsl:template>
</xsl:stylesheet>