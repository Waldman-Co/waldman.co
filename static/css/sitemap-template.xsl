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
        <style type="text/css">

        </style>
    </head>
    <body>
    <table id="sitemap" cellpadding="3">
		<thead>
			<tr>
				<xsl:choose>
					<xsl:when test="sitemap:sitemapindex = not(node())">
						<th width="60%">Urls</th>
						<th width="20%">Last Modified</th>
						<th width="20%">Priority</th>
					</xsl:when>
					<xsl:otherwise>
						<th width="60%">Urls</th>
						<th width="40%">Last Modified</th>
					</xsl:otherwise>
				</xsl:choose>

			</tr>
		</thead>
		<tbody>
			<xsl:for-each select="sitemap:sitemapindex/sitemap:sitemap">
				<xsl:variable name="sitemapUrl">
					<xsl:value-of select="sitemap:loc"/>
				</xsl:variable>
				<tr>
					<td>
						<a href="{$sitemapUrl}" target="_blank"><xsl:value-of select="sitemap:loc"/></a>
					</td>
					<td>
						<xsl:value-of select="sitemap:lastmod"/>
					</td>
				</tr>
			</xsl:for-each>
			<xsl:for-each select="sitemap:urlset/sitemap:url">
				<tr>
					<td>
					<xsl:if test="image:image != ''">
						<details open='true'>
							<summary><xsl:value-of select="sitemap:loc"/></summary>
						<xsl:for-each select="image:image">
							<xsl:variable name="imageUrl">
								<xsl:value-of select="image:loc"/>
							</xsl:variable>
							<div>
								<details open="true" class="child-details">
									<summary>Image</summary>
									<div class="url child-details">
										<div>ImageUrl: </div>
										<div><a href="{$imageUrl}" target="_blank"><xsl:value-of select="image:loc"/></a></div>
									</div>
									<div class="url child-details">
										<div>Title: </div>
										<div><xsl:value-of select="image:title"/></div>
									</div>
									<div class="url child-details">
										<div>Caption: </div>
										<div><xsl:value-of select="image:caption"/></div>
									</div>
								</details>
							</div>
							<br />
							</xsl:for-each>
						</details>
					</xsl:if>
					<xsl:if test="image:image = not(node())">
						<div><xsl:value-of select="sitemap:loc"/></div>
					</xsl:if>
					</td>
					<td>
						<xsl:value-of select="sitemap:lastmod"/>
					</td>
					<td><xsl:value-of select="sitemap:priority"/></td>
				</tr>
      		</xsl:for-each>
		</tbody>
	</table>
  </body>
  </html>
</xsl:template>

</xsl:stylesheet>